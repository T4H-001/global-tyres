// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/**
 * @title TyreLedger
 * @dev Simple smart contract for anchoring tyre lifecycle event hashes
 * Deployed on Polygon Amoy testnet for tamper-evident record keeping
 */
contract TyreLedger {
    struct Anchor {
        string batchId;
        bytes32 merkleRoot;
        uint256 timestamp;
        address submitter;
    }
    
    mapping(bytes32 => Anchor) public anchors;
    mapping(string => bytes32) public batchToHash;
    
    event AnchorSubmitted(
        bytes32 indexed anchorHash,
        string indexed batchId,
        bytes32 merkleRoot,
        address indexed submitter,
        uint256 timestamp
    );
    
    /**
     * @dev Submit a merkle root for a batch of tyre lifecycle events
     * @param batchId Unique identifier for the batch (e.g., "batch-2025-08-17")
     * @param merkleRoot SHA-256 hash of all event hashes in the batch
     */
    function submitAnchor(string memory batchId, bytes32 merkleRoot) external {
        require(bytes(batchId).length > 0, "Batch ID cannot be empty");
        require(merkleRoot != bytes32(0), "Merkle root cannot be zero");
        require(batchToHash[batchId] == bytes32(0), "Batch already anchored");
        
        bytes32 anchorHash = keccak256(abi.encodePacked(batchId, merkleRoot, block.timestamp, msg.sender));
        
        anchors[anchorHash] = Anchor({
            batchId: batchId,
            merkleRoot: merkleRoot,
            timestamp: block.timestamp,
            submitter: msg.sender
        });
        
        batchToHash[batchId] = anchorHash;
        
        emit AnchorSubmitted(anchorHash, batchId, merkleRoot, msg.sender, block.timestamp);
    }
    
    /**
     * @dev Verify a merkle root for a given batch
     * @param batchId The batch identifier to verify
     * @param merkleRoot The expected merkle root
     * @return bool True if the merkle root matches the anchored value
     */
    function verifyAnchor(string memory batchId, bytes32 merkleRoot) external view returns (bool) {
        bytes32 anchorHash = batchToHash[batchId];
        if (anchorHash == bytes32(0)) {
            return false;
        }
        
        return anchors[anchorHash].merkleRoot == merkleRoot;
    }
    
    /**
     * @dev Get anchor details for a batch
     * @param batchId The batch identifier
     * @return anchor The anchor details
     */
    function getAnchor(string memory batchId) external view returns (Anchor memory) {
        bytes32 anchorHash = batchToHash[batchId];
        require(anchorHash != bytes32(0), "Batch not found");
        
        return anchors[anchorHash];
    }
}
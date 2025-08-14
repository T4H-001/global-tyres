import { Role } from '@/content/demos';

interface RoleSelectorProps {
  roles: readonly Role[];
  selectedRole: string;
  onRoleChange: (roleId: string) => void;
}

export default function RoleSelector({ roles, selectedRole, onRoleChange }: RoleSelectorProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {roles.map((role) => (
        <button
          key={role.id}
          onClick={() => onRoleChange(role.id)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            selectedRole === role.id
              ? 'bg-primary text-primary-foreground shadow-md'
              : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
          }`}
        >
          {role.name}
        </button>
      ))}
    </div>
  );
}
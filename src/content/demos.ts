export interface CTA {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary';
}

export interface Vignette {
  title: string;
  description: string;
  valueBullets: readonly string[];
  heygenVideoUrl?: string;
  elevenLabsScript?: string;
  voiceId?: string;
  ctas: readonly CTA[];
  transcript?: string;
}

export interface Role {
  id: string;
  name: string;
  description: string;
  vignettes: readonly Vignette[];
}

export const demoContent = {
  roles: [
    {
      id: 'individuals',
      name: 'Individuals',
      description: 'Vehicle owners registering tyres and tracking their lifecycle',
      vignettes: [
        {
          title: 'Quick Tyre Registration',
          description: 'See how easy it is to register your tyres and start tracking their journey',
          valueBullets: [
            'Register tyres in under 2 minutes',
            'Track warranty and replacement dates',
            'Get alerts for recalls or safety issues',
            'Ensure proper disposal at end-of-life'
          ],
          elevenLabsScript: "Welcome to the tyre registration system. In just two minutes, you can register your tyres and unlock a world of benefits. Track warranties, get safety alerts, and ensure responsible disposal.",
          voiceId: '9BWtsMINqrJLrRacOk9x', // Aria
          ctas: [
            { label: 'Try Registration', href: '/tyres?tab=register&demo=on', variant: 'primary' },
            { label: 'See Features', href: '/tyres?demo=on', variant: 'secondary' }
          ],
          transcript: 'This demonstration shows the simple process of registering your vehicle tyres...'
        },
        {
          title: 'Tyre Health Tracking',
          description: 'Monitor tyre condition and get personalized maintenance recommendations',
          valueBullets: [
            'Real-time condition monitoring',
            'Personalized maintenance alerts',
            'Replacement recommendations',
            'Safety recall notifications'
          ],
          elevenLabsScript: "Your tyres are critical to your safety. Our tracking system monitors their health and provides timely alerts to keep you safe on the road.",
          voiceId: 'EXAVITQu4vr4xnSDxMaL', // Sarah
          ctas: [
            { label: 'View Dashboard', href: '/tyres?tab=dashboard&demo=on', variant: 'primary' }
          ]
        }
      ]
    },
    {
      id: 'retailers',
      name: 'Retailers',
      description: 'Tyre retailers managing inventory, sales, and customer relationships',
      vignettes: [
        {
          title: 'Bulk Inventory Upload',
          description: 'Streamline your inventory management with bulk upload capabilities',
          valueBullets: [
            'Upload hundreds of tyres instantly',
            'Automated data validation',
            'Real-time inventory tracking',
            'Integration with existing systems'
          ],
          elevenLabsScript: "Transform your inventory management. Upload hundreds of tyres in seconds, with automated validation and real-time tracking integration.",
          voiceId: 'CwhRBWXzGAHq8TQ4Fs17', // Roger
          ctas: [
            { label: 'Try Bulk Upload', href: '/tyres?tab=bulk&demo=on', variant: 'primary' },
            { label: 'View Analytics', href: '/tyres?tab=dashboard&demo=on', variant: 'secondary' }
          ]
        },
        {
          title: 'Customer Journey Tracking',
          description: 'Follow tyres from sale through their complete lifecycle',
          valueBullets: [
            'End-to-end visibility',
            'Customer satisfaction insights',
            'Warranty claim management',
            'Compliance reporting'
          ],
          elevenLabsScript: "Gain complete visibility into every tyre you sell. Track customer satisfaction, manage warranties, and ensure compliance effortlessly.",
          voiceId: 'FGY2WhTYpPnrIDTdsKH5', // Laura
          ctas: [
            { label: 'See Journey Map', href: '/tyres?demo=on', variant: 'primary' }
          ]
        }
      ]
    },
    {
      id: 'collectors',
      name: 'Collectors & Transporters',
      description: 'Companies collecting and transporting end-of-life tyres',
      vignettes: [
        {
          title: 'Collection Route Optimization',
          description: 'Optimize pickup routes and manage collection schedules efficiently',
          valueBullets: [
            'AI-powered route optimization',
            'Real-time schedule updates',
            'Capacity planning tools',
            'Customer notification system'
          ],
          elevenLabsScript: "Revolutionize your collection operations with AI-powered route optimization and real-time scheduling that maximizes efficiency.",
          voiceId: 'IKne3meq5aSn9XLyUdCD', // Charlie
          ctas: [
            { label: 'Coming Soon', href: '#', variant: 'secondary' }
          ]
        }
      ]
    },
    {
      id: 'recyclers',
      name: 'Recyclers',
      description: 'Facilities processing end-of-life tyres into new materials',
      vignettes: [
        {
          title: 'Closed-Loop Tracking',
          description: 'Track tyres from collection through to recycled materials',
          valueBullets: [
            'Complete audit trail',
            'Material yield tracking',
            'Quality certification',
            'Environmental impact reporting'
          ],
          elevenLabsScript: "Close the loop with comprehensive tracking from collection to recycled materials, ensuring quality and environmental compliance.",
          voiceId: 'JBFqnCBsd6RMkjVDRZzb', // George
          ctas: [
            { label: 'Coming Soon', href: '#', variant: 'secondary' }
          ]
        }
      ]
    },
    {
      id: 'manufacturers',
      name: 'Manufacturers & Brands',
      description: 'Tyre manufacturers monitoring product performance and lifecycle',
      vignettes: [
        {
          title: 'Product Performance Analytics',
          description: 'Gain insights into how your tyres perform in real-world conditions',
          valueBullets: [
            'Real-world performance data',
            'Warranty claim analysis',
            'Product improvement insights',
            'Market feedback aggregation'
          ],
          elevenLabsScript: "Unlock valuable insights into your product performance with real-world data that drives innovation and quality improvements.",
          voiceId: 'N2lVS1w4EtoT3dr4eOWO', // Callum
          ctas: [
            { label: 'Coming Soon', href: '#', variant: 'secondary' }
          ]
        }
      ]
    },
    {
      id: 'regulators',
      name: 'Regulators & Councils',
      description: 'Government bodies ensuring compliance and environmental protection',
      vignettes: [
        {
          title: 'Compliance Monitoring',
          description: 'Monitor industry compliance and environmental impact',
          valueBullets: [
            'Real-time compliance tracking',
            'Environmental impact metrics',
            'Industry reporting dashboards',
            'Policy effectiveness analysis'
          ],
          elevenLabsScript: "Ensure environmental protection with real-time compliance monitoring and comprehensive industry insights for effective policy making.",
          voiceId: 'SAz9YHcvj6GT2YYXdXww', // River
          ctas: [
            { label: 'Search Database', href: '/search?demo=on', variant: 'primary' },
            { label: 'Compliance Dashboard', href: '#', variant: 'secondary' }
          ]
        }
      ]
    },
    {
      id: 'educators',
      name: 'Educators',
      description: 'Educational institutions teaching environmental stewardship',
      vignettes: [
        {
          title: 'Classroom Demonstration',
          description: 'Interactive tools for teaching tyre lifecycle and environmental impact',
          valueBullets: [
            'Ready-to-use lesson plans',
            'Interactive demonstrations',
            'Student engagement tools',
            'Real-world data examples'
          ],
          elevenLabsScript: "Engage students with interactive demonstrations that bring environmental stewardship to life through real-world tyre lifecycle examples.",
          voiceId: 'TX3LPaxmHKxFdv7VOQHJ', // Liam
          ctas: [
            { label: 'Download Lesson Plans', href: '#', variant: 'primary' },
            { label: 'Interactive Demo', href: '/tyres?demo=on', variant: 'secondary' }
          ]
        },
        {
          title: 'Environmental Impact Explainer',
          description: 'Comprehensive resources on tyre environmental impact and solutions',
          valueBullets: [
            'Environmental impact data',
            'Recycling process explanations',
            'Sustainability metrics',
            'Solution case studies'
          ],
          elevenLabsScript: "Discover the environmental impact of tyres and learn about innovative solutions that are creating a more sustainable future.",
          voiceId: 'XB0fDUnXU5powFXDhCwa', // Charlotte
          ctas: [
            { label: 'Download Resources', href: '#', variant: 'primary' }
          ]
        }
      ]
    }
  ]
} as const;
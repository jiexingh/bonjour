import type { Config } from "tailwindcss";
import easings from 'open-props/src/easing';

const config: Config = {
    darkMode: ["class"],
    content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
        highlight: "#6202FF",
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
      keyframes: {
        'slide-top': {
           from: { transform: 'translateY(20px)', opacity: '0'},
           to: { transform: 'translateY(0px)', opacity: '1' }
        },
        'slide-left': {
					from: { transform: 'translateX(20px)', opacity: '0' },
					to: { transform: 'translateX(0px)', opacity: '1' },
				},
        'fade-in': {
					from: { opacity: '0' },
					to: { opacity: '1' },
				},
        'roll-reveal': {
					from: { transform: 'rotate(12deg) scale(0)', opacity: '0' },
					to: { transform: 'rotate(0deg) scale(1)', opacity: '1' },
				},
      },
			animation: {
				'roll-reveal': `0.4s roll-reveal ${easings['--ease-spring-2']} backwards`,
				'fade-in': '0.4s fade-in ease-out backwards',
				'slide-top': '0.3s slide-top ease-out backwards',
				'slide-left': '0.3s slide-left ease-out backwards',
			}
  	}
  },
  plugins: [require("tailwindcss-animate")]
};
export default config;

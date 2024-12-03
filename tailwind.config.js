module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"], // Adjust paths to match your project
	theme: {
	  extend: {
		keyframes: {
		  showBubble: {
			'0%': { opacity: 0 },
			'100%': { opacity: 1 },
		  },
		},
		animation: {
		  'bubble-sequence-1': 'showBubble 0.6s linear 0.6s infinite alternate',
		  'bubble-sequence-2': 'showBubble 0.6s linear 1.2s infinite alternate',
		  'bubble-sequence-3': 'showBubble 0.6s linear 1.8s infinite alternate',
		},
	  },
	},
	plugins: [],
  };
  
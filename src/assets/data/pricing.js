const pricingData = [
    {
        id: 1,
        icon: require('../silver.png'), // Replace with your icon image path
        header: 'Silver Package',
        details: [
            '100+ Free Templates',
            '10 Team Members',
            'Customer Support',
            'Basic Analytics'
        ],
        amount: ['$29', '$69']
    },
    {
        id: 2,
        icon: require('../gold.png'), // Replace with your icon image path
        header: 'Golden Package',
        details: [
            '300+ Premium Templates',
            'Unlimited Team Members',
            'Priority Customer Support',
            'Advanced Analytics'
        ],
        amount: ['$49', '$99']
    },
    {
        id: 3,
        icon: require('../diamond.png'), // Replace with your icon image path
        header: 'Diamond Package',
        details: [
            'Custom Templates',
            'Dedicated Team Support',
            'Advanced Analytics',
            'Integration Options',
            'Custom Templates',
            'Dedicated Team Support',
        ],
        amount: ['$99', '$199'],
    }
];

export default pricingData;

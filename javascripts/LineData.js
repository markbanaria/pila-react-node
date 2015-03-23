module.exports = {
  // Load Mock Product Data Into localStorage
  init: function() {
    localStorage.clear();
    localStorage.setItem('Lines', JSON.stringify([{
      "customers": [
        {"name": "Customer J. Customer", "id": "09152564158"},
        {"name": "Gustomer J. Gustomer", "id": "09172564158"},
        {"name": "Hustomer J. Hustomer", "id": "09984561223"},
        {"name": "Justomer J. Justomer", "id": "09265478744"},
        {"name": "Kustomer J. Kustomer", "id": "09955481945"}
      ],

      "activeuser": {"name": "User J. User"},

      "lines": [
        {"name": "Deposit", "customers": ["09152564158", "09955481945", "09265478744", "09172564158"], "id": 1 },
        {"name": "New Accounts", "customers": ["09984561223", "09172564158", "09955481945"], "id": 2 },
        {"name": "Check Clearing", "customers": ["09984561223", "09172564158", "09152564158", "09265478744"], "id": 3 },
        {"name": "Withdrawal", "customers": ["09955481945", "09265478744", "09984561223"], "id": 4 }
      ]
    }]));
  }
};
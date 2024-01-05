const dummyData = [
  {
    consumerName: "Raghuvendra Raga",
    assets: {
      total: "₹35,342",
      gold: "50.54g",
      silver: "34.2g",
      money: "₹242.5",
    },
    kycStatus: "done",
    fieldExec: "Arun Jha",
    associate: "Anika Singh",
    zone: "South",
    accountType: "Business",
    tpa: "9876543210@trucard",
  },
  // Add more dummy data here...
];

// Generate additional dummy data up to 50 fields
for (let i = 1; i < 50; i++) {
  dummyData.push({
    consumerName: `Consumer ${i}`,
    assets: {
      total: `₹${Math.floor(Math.random() * 50000)}`,
      gold: `${(Math.random() * 100).toFixed(2)}g`,
      silver: `${(Math.random() * 50).toFixed(2)}g`,
      money: `₹${(Math.random() * 500).toFixed(2)}`,
    },
    kycStatus: i % 2 === 0 ? "done" : "pending",
    fieldExec: `Field Executive ${i}`,
    associate: `Associate ${i}`,
    zone: i % 2 === 0 ? "North" : "South",
    accountType: i % 2 === 0 ? "Personal" : "Business",
    tpa: `${Math.floor(Math.random() * 9999999999)}@trucard`,
  });
}

console.log(dummyData);

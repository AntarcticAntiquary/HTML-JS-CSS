// chart.js 
document.addEventListener('DOMContentLoaded', () => { 
    // Function to fetch and parse the CSV file 
    fetch('output.csv') 
        .then(response => response.text()) // Fetch the CSV file and convert it to text 
        .then(csvText => { 
            // Parse the CSV text using PapaParse 
            Papa.parse(csvText, { 
                header: true, // Treat the first row as headers 
                dynamicTyping: true, // Automatically convert data types 
                complete: function(results) { 
                    const data = results.data; // Parsed data 
                    const years = data.map(row => row.Year); // Extract years from the data 
                    const subs = data.map(row => row.Subs); // Extract member numbers from the data 
  
                    // Create the chart 
                    const ctx = document.getElementById('myChart').getContext('2d'); 
                    const myChart = new Chart(ctx, { 
                        type: 'bar', // Specify the chart type 
                        data: { 
                            labels: years, // Set the labels for the x-axis 
                            datasets: [{ 
                                label: 'Number of Members', // Label for the dataset 
                                data: subs, // Data for the chart 
                                backgroundColor: 'rgba(54, 162, 235, 0.2)', // Background color of the bars 
                                borderColor: 'rgba(54, 162, 235, 1)', // Border color of the bars 
                                borderWidth: 1 // Width of the borders 
                            }] 
                        }, 
                        options: { 
                            scales: { 
                                y: { 
                                    beginAtZero: true // Start the y-axis at zero 
                                } 
                            } 
                        } 
                    }); 
                } 
            }); 
        }) 
        .catch(error => console.error('Error fetching the CSV file:', error)); // Handle errors 
}); 

# import json
# import random

# # Generate 5 groups of 10000 latitude and longitude coordinates each
# num_points = 10000
# min_lat, max_lat = 0, 70
# min_lng, max_lng = -180, 180

# europe_coordinates = [(random.uniform(47, 55), random.uniform(16, 25)) for _ in range(num_points)]
# asia_coordinates = [(random.uniform(24, 40), random.uniform(50, 62)) for _ in range(num_points)]
# usa_coordinates = [(random.uniform(42, 46), random.uniform(-91, -85)) for _ in range(num_points)]

# # Combine the groups of coordinates into a single list
# coordinates = europe_coordinates + asia_coordinates + usa_coordinates

# # Serialize the coordinates as a JSON string and write it to a file
# with open("heatmap_data.json", "w") as f:
#     json.dump(coordinates, f)

# # Print the first 100 characters of the JSON string
# with open("heatmap_data.json", "r") as f:
#     json_string = f.read()
#     print(json_string[:100])


# import csv
# import json

# # Open the CSV file and read in the data
# with open('population_galicia.csv') as f:
#     reader = csv.reader(f)
#     next(reader)  # skip header row
#     data = [(float(row[1]), float(row[0])) for row in reader]

# # Write the data to a JSON file
# with open('population_galicia.json', 'w') as f:
#     json.dump(data, f)

# # Print the first 10 latitude/longitude tuples
# print("Latitude, Longitude")
# for lat, lon in data[:10]:
#     print(f"{lat:.6f}, {lon:.6f}")

# import csv
# import json

# # Set the file paths
# input_file = 'heatmap_data_1.csv'
# output_file = 'heatmap_data_1.json'

# # Create an empty list to hold the tuples
# data = []

# # Open the input CSV file and create a CSV reader object
# with open(input_file, 'r') as csv_in_file:
#     csv_reader = csv.reader(csv_in_file)

#     # Iterate over each row in the input CSV file
#     for row in csv_reader:
#         # Convert the values in the first two columns to numeric types
#         value1 = float(row[0])
#         value2 = float(row[1])

#         # Append a new tuple to the list, containing the numeric values
#         data.append((value1, value2))

# # Open the output JSON file and write the list of tuples as JSON
# with open(output_file, 'w') as json_out_file:
#     json.dump(data, json_out_file)

import csv
import json

# Set the file paths
input_file = 'heatmap_data_2.csv'
output_file = input_file.split('.')[0] + '.json'

# Create an empty list to hold the tuples
data = []

# Open the input CSV file and create a CSV reader object
with open(input_file, 'r') as csv_in_file:
    csv_reader = csv.reader(csv_in_file)

    # Skip the first row (header row)
    next(csv_reader)

    # Iterate over each row in the input CSV file
    for row in csv_reader:
        # Convert the latitude and longitude values to floats
        lat = float(row[1])
        lng = float(row[2])
        
        # Append a new tuple to the list, containing the latitude and longitude values
        data.append((lat, lng))

# Open the output JSON file and write the list of tuples as JSON
with open(output_file, 'w') as json_out_file:
    json.dump(data, json_out_file)

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
import csv
import json

# Open the CSV file and read in the data
with open('population_galicia.csv') as f:
    reader = csv.reader(f)
    next(reader)  # skip header row
    data = [(float(row[1]), float(row[0])) for row in reader]

# Write the data to a JSON file
with open('population_galicia.json', 'w') as f:
    json.dump(data, f)

# Print the first 10 latitude/longitude tuples
print("Latitude, Longitude")
for lat, lon in data[:10]:
    print(f"{lat:.6f}, {lon:.6f}")

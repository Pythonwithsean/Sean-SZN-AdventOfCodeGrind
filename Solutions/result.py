file_path = "nums.txt"

# Read the file and split lines
with open(file_path, "r") as file:
    lines = file.read().splitlines()

# Convert each line to an integer and calculate the sum
sum_result = sum(int(line) for line in lines)

# Print the sum
print(f"Sum of concatenated string values: {sum_result}")
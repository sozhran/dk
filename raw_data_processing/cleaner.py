from datetime import timedelta
import json
import math

def scale_stat(base_value: int) -> list:
	result = []
	
	result.append(base_value)

	for i in range(2, 11):
		result.append(base_value + (math.floor(base_value * 0.35) * (i-1)))
		
	return result

### WAGES

def get_training_wages(data: list) -> list:
	return [int(data[i]) for i in range(len(data)) if i % 3 == 2 and data[i]]

def get_sleep_leveling_wages(data: list) -> list:
	return [sum(int(x) for x in data[i].split(':')) for i in range(len(data)) if i % 3 == 2 and data[i]]

### COSTS

# Costs were initially written down as remainders from the starting money (500.000)".
# So first they need to be turned around.
# Then, to calculate the cost of 1 level, costs of all previous levels and all previous wages need to be substracted.
def clean_training_costs(data: list) -> list:
	raw_costs = [(500000-int(data[i])) for i in range(len(data)) if i % 3 == 1 and data[i]]

	wages = get_training_wages(data)

	cleaned_costs = []

	for index, time in enumerate(raw_costs):
		cleaned_costs.append(time - sum(wages[:index+1]) - sum(cleaned_costs[:index]))

	return cleaned_costs

### TIMES

def parse_timestring(time_string: str) -> timedelta:
	minutes, seconds, milliseconds = time_string.split(':')
	
	return timedelta(
		minutes=int(minutes),
		seconds=int(seconds),
		milliseconds=int(milliseconds)
	)

def clean_training_times(data: list) -> list:
	return [parse_timestring(data[i]) for i in range(len(data)) if i % 3 == 0 and data[i]]

def calculate_total_time(data: list) -> timedelta:
	initial = data[0]
	
	for i in range(1, len(data)):
		initial += data[i]

	return initial

### NOW LET'S CLEAN IT ALL UP

def clean_training_data(data):
	result = {}

	for item in data:
		times = clean_training_times(data[item])
		costs = clean_training_costs(data[item])
		wages = get_training_wages(data[item])

		total_cost = sum(costs)
		total_time = str(calculate_total_time(times))

		result[item] = {"times": [str(x) for x in times], "costs": costs, "wages": wages, "total_cost": total_cost, "total_time": total_time }

	return result

def clean_sleep_leveling_data(data):
	result = {}

	for item in data:
		times = clean_training_times(data[item])
		wages = get_sleep_leveling_wages(data[item])
		
		total_time = str(calculate_total_time(times))

		result[item] = { "times": [str(x) for x in times], "wages": wages, "total_time": total_time}
	
	return result


with open('./raw_data_training.json', 'r') as file1:
	training_data = json.load(file1)

with open('./raw_data_sleep_leveling.json', 'r') as file2:
	sleep_leveling_data = json.load(file2)

cleaned_training_data = clean_training_data(training_data)
cleaned_sleep_leveling_data = clean_sleep_leveling_data(sleep_leveling_data)

with open('./cleaned_data_training.json', 'w') as newfile1:
	newfile1.write(json.dumps(cleaned_training_data))
	
with open('./cleaned_data_sleep_leveling.json', 'w') as newfile2:
	newfile2.write(json.dumps(cleaned_sleep_leveling_data))
import json
import os

keys_to_compare = [
	("Name", "textId"),
	("EntranceRoom", "room"),
	("RoomSlabsRequired", "room"),
	("PrimaryJobs", "jobPrimary"),
	("SecondaryJobs", "jobSecondary"),
	("NotDoJobs", "willRefuseJobs"),
	("TrainingValue", "trainingSkill"),
	("TrainingCost", "trainingCost"),
	("ResearchValue", "researchSkill"),
	("ManufactureValue", "manufactureSkill"),
	("ScavengeValue", "scavengerSkill"),
	("ScavengerCost", "scavengerCost"),
	("AttackPreference", "attackPreference"),
	("Pay", "wage"),
	("Health", "health"),
	("Strength", "strength"),
	("Dexterity", "dexterity"),
	("Defence", "defence"),
	("Armour", "armour"),
	("BaseSpeed", "movementSpeed"),
	("Luck", "luck"),
	("LairEnemy", "hates"),
	("Recovery", "sleepRecovery"),
	("TortureTime", "tortureTime"),
	("Powers", "spells"),
	("PowersLevelRequired", "spells"),
	("HungerFill", "hungerChickens"),
	("HungerRate", "hungerRate"),
	("AngerJobs", "angerJobs"),
	("LevelsTrainValues", "levelTrainValues")
]

with open('./creature_data.json', 'r') as file:
	creature_data = json.load(file)

result = {}

for filename in os.listdir('./cfgs/'):
	with open(os.path.join('./cfgs/', filename), 'r') as file:
		contents = file.read().split('\n')

		cfg_data = {}

		for line in contents:
			if '=' not in line:
				continue
			
			key, value = line.split('=')
			key, value = key.strip(), value.strip()
			
			cfg_data[key] = value
		
		creature_id = filename.split('.')[0]

		my_data = next(x for x in creature_data if x["textId"] == creature_id)

		my_data["trainingSkill"] = my_data["training"]["skill"]
		my_data["trainingCost"] = my_data["training"]["cost"]
		my_data["scavengerSkill"] = my_data["scavenger"]["skill"]
		my_data["scavengerCost"] = my_data["scavenger"]["cost"]
		my_data["jobPrimary"] = my_data["job"]["primary"]
		my_data["jobSecondary"] = my_data["job"]["secondary"]
		my_data["hungerChickens"] = my_data["hunger"]["chickens"]
		my_data["hungerRate"] = my_data["hunger"]["rate"]
		my_data["levelTrainValues"] = " ".join(str(x) for x in my_data["levelTrainValues"])
		
		comparison_data = {}

		for pair in keys_to_compare:
			cfg = str(cfg_data[pair[0]]).lower()
			mine = str(my_data[pair[1]]).lower()

			if cfg != mine:
				comparison_data[pair[0]] = (cfg, mine)
		
		result[creature_id] = comparison_data
	
with open('./comparison.json', 'w') as newfile:
	newfile.write(json.dumps(result))

print("ALL DONE ALL GOOD")
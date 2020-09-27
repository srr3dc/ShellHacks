{
	"actions": [
		{
			"say": "Let's start!"
		},
		{
			"collect": {
				"name": "color_quiz",
				"questions": [
					{
						"question": {
							"say": "What is your favorite color?"
						},
						"name": "fav_color",
						"type": null
					},
					{
						"question": {
							"say": "What color of the sky do you like best?"
						},
						"name": "sky",
						"type": null
					},
					{
						"question": {
							"say": "What colors do you see around you?"
						},
						"name": "around",
						"type": null
					},
					{
						"question": {
							"say": "What colors make you happy?"
						},
						"name": "happy",
						"type": null
					},
					{
						"question": {
							"say": "What colors go well together?"
						},
						"name": "complement",
						"type": null
					},
					{
						"question": {
							"say": "What emotion do you feel on seeing a rainbow?"
						},
						"name": "rainbow",
						"type": null
					}
				],
				"on_complete": {
					"redirect": {
						"method": "POST",
						"uri": "https://cyan-cockroach-7837.twil.io/autopilot"
					}
				}
			}
		}
	]
}
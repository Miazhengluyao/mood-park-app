import { useState } from "react";

const moods = [
  { id: "burn", title: "Toddler Energy Burn", desc: "Let them run it out" },
  { id: "calm", title: "Calm Nature Walk", desc: "Slow pace, low stimulation" },
  { id: "play", title: "Playground Adventure", desc: "Classic playground fun" },
  { id: "picnic", title: "Picnic & Chill", desc: "Eat, relax, roam" },
  { id: "water", title: "Water Play Day", desc: "Splash & sensory fun" },
  { id: "active", title: "Active / Sports Day", desc: "Run, bike, move" },
  { id: "quiet", title: "Quiet Walk", desc: "Wind-down stroll" }
];

const parks = {
  burn: [
    { name: "Gage Park", reason: "Big playground + open space" },
    { name: "Garfield Park", reason: "Simple playground setup" }
  ],
  calm: [
    { name: "Lake Shawnee Park", reason: "Trails + lake views" },
    { name: "Gage Rose Garden", reason: "Low stimulation zone" }
  ],
  picnic: [
    { name: "Gage Park", reason: "Tables + shade + space" },
    { name: "Lake Shawnee Park", reason: "Scenic picnic spots" }
  ],
  play: [
    { name: "Gage Park", reason: "Carousel + zoo + playground" },
    { name: "Neighborhood Parks", reason: "Basic playground access" }
  ],
  water: [
    { name: "Gage Park", reason: "Splash pad + aquatic center" }
  ],
  active: [
    { name: "Lake Shawnee Park", reason: "Bike trails + long loops" }
  ],
  quiet: [
    { name: "Lake Shawnee Park", reason: "Low traffic walking paths" }
  ]
};

export default function MoodParkWireframe() {
  const [selectedMood, setSelectedMood] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {!selectedMood && (
        <div>
          <h1 className="text-2xl font-semibold mb-4">How does today feel?</h1>
          <div className="grid gap-3">
            {moods.map((m) => (
              <button
                key={m.id}
                onClick={() => setSelectedMood(m.id)}
                className="text-left p-4 bg-white rounded-xl shadow hover:shadow-md transition"
              >
                <div className="font-semibold">{m.title}</div>
                <div className="text-sm text-gray-500">{m.desc}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {selectedMood && (
        <div>
          <button
            onClick={() => setSelectedMood(null)}
            className="mb-4 text-sm text-blue-500"
          >
            ← Back
          </button>

          <h2 className="text-xl font-semibold mb-2">
            Recommended Parks
          </h2>

          <p className="text-sm text-gray-600 mb-4">
            Based on your selected mood, we matched parks with the best fit conditions.
          </p>

          <div className="grid gap-3">
            {(parks[selectedMood] || []).map((p, idx) => (
              <div
                key={idx}
                className="p-4 bg-white rounded-xl shadow"
              >
                <div className="font-semibold">{p.name}</div>
                <div className="text-sm text-gray-500 mt-1">
                  {p.reason}
                </div>
                <div className="mt-3 flex gap-2">
                  <button className="text-sm px-3 py-1 bg-blue-500 text-white rounded">
                    View Map
                  </button>
                  <button className="text-sm px-3 py-1 bg-gray-100 rounded">
                    Save
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export interface BrainRegion {
  id: string;
  name: string;
  description: string;
  functions: string[];
  color: string;
  position: [number, number, number];
  scale: number;
  imagePath: string;
}

export const brainRegions: BrainRegion[] = [
  {
    id: "prefrontal",
    name: "Prefrontal Cortex",
    description: "The prefrontal cortex is responsible for executive functions including planning, decision-making, problem-solving, and personality expression. It plays a crucial role in moderating social behavior and complex cognitive tasks.",
    functions: ["decision making", "planning", "problem solving", "reasoning", "thinking", "coding", "math", "logic", "focus", "concentration", "working memory"],
    color: "#00D4FF",
    position: [0, 0.3, 0.8],
    scale: 0.35,
    imagePath: "/brain-regions/brain-prefrontal.png",
  },
  {
    id: "motor",
    name: "Motor Cortex",
    description: "The motor cortex is responsible for planning, controlling, and executing voluntary movements. It sends signals down the spinal cord to muscles throughout the body.",
    functions: ["running", "walking", "jumping", "cycling", "bicycle", "exercise", "physical", "movement", "dancing", "swimming", "sports", "lifting", "throwing"],
    color: "#FF00A8",
    position: [0, 0.5, 0.2],
    scale: 0.3,
    imagePath: "/brain-regions/brain-motor.png",
  },
  {
    id: "sensory",
    name: "Somatosensory Cortex",
    description: "The somatosensory cortex processes sensory information from the body, including touch, temperature, pain, and proprioception (body position awareness).",
    functions: ["touch", "feeling", "sensation", "temperature", "pain", "texture", "pressure"],
    color: "#A855F7",
    position: [0, 0.5, -0.1],
    scale: 0.28,
    imagePath: "/brain-regions/brain-sensory.png",
  },
  {
    id: "visual",
    name: "Visual Cortex",
    description: "Located in the occipital lobe, the visual cortex processes visual information from the eyes. It interprets colors, shapes, motion, and spatial relationships.",
    functions: ["seeing", "watching", "reading", "visual", "looking", "observing", "drawing", "painting", "art", "design", "photography"],
    color: "#3B82F6",
    position: [0, 0.1, -0.9],
    scale: 0.35,
    imagePath: "/brain-regions/brain-visual.png",
  },
  {
    id: "auditory",
    name: "Auditory Cortex",
    description: "The auditory cortex processes sounds and is essential for understanding speech and music. It interprets pitch, rhythm, and the spatial location of sounds.",
    functions: ["listening", "hearing", "music", "sound", "talking", "speaking", "singing", "audio", "conversation", "language"],
    color: "#10B981",
    position: [0.8, 0, 0],
    scale: 0.25,
    imagePath: "/brain-regions/brain-auditory.png",
  },
  {
    id: "broca",
    name: "Broca's Area",
    description: "Broca's area is crucial for speech production and language processing. Damage to this area results in difficulty producing speech while comprehension remains intact.",
    functions: ["speaking", "talking", "speech", "language", "communication", "presenting", "lecturing"],
    color: "#F97316",
    position: [0.6, 0.2, 0.5],
    scale: 0.2,
    imagePath: "/brain-regions/brain-broca.png",
  },
  {
    id: "wernicke",
    name: "Wernicke's Area",
    description: "Wernicke's area is essential for language comprehension. It helps us understand spoken and written language and is connected to Broca's area via neural pathways.",
    functions: ["understanding", "comprehension", "reading", "interpreting", "language", "learning"],
    color: "#EAB308",
    position: [0.7, 0, -0.3],
    scale: 0.22,
    imagePath: "/brain-regions/brain-wernicke.png",
  },
  {
    id: "hippocampus",
    name: "Hippocampus",
    description: "The hippocampus is critical for memory formation, particularly converting short-term memories into long-term ones. It also plays a role in spatial navigation.",
    functions: ["memory", "remembering", "learning", "studying", "memorizing", "navigation", "recalling", "nostalgia"],
    color: "#EC4899",
    position: [0.4, -0.3, 0],
    scale: 0.2,
    imagePath: "/brain-regions/brain-hippocampus.png",
  },
  {
    id: "amygdala",
    name: "Amygdala",
    description: "The amygdala processes emotions, especially fear and anxiety. It plays a key role in emotional responses, decision-making, and memory consolidation related to emotional events.",
    functions: ["emotion", "fear", "anxiety", "stress", "excitement", "anger", "happiness", "sadness", "love", "feeling"],
    color: "#EF4444",
    position: [0.35, -0.25, 0.3],
    scale: 0.15,
    imagePath: "/brain-regions/brain-amygdala.png",
  },
  {
    id: "cerebellum",
    name: "Cerebellum",
    description: "The cerebellum coordinates voluntary movements, balance, and motor learning. It fine-tunes movements and is essential for smooth, accurate physical actions.",
    functions: ["balance", "coordination", "motor learning", "posture", "precision", "timing", "rhythm", "dancing", "sports", "gymnastics"],
    color: "#8B5CF6",
    position: [0, -0.5, -0.6],
    scale: 0.4,
    imagePath: "/brain-regions/brain-cerebellum.png",
  },
  {
    id: "thalamus",
    name: "Thalamus",
    description: "The thalamus acts as a relay station, routing sensory and motor signals to the cerebral cortex. It also regulates consciousness, sleep, and alertness.",
    functions: ["awareness", "consciousness", "sleep", "alertness", "attention", "sensory processing"],
    color: "#06B6D4",
    position: [0, 0, 0],
    scale: 0.2,
    imagePath: "/brain-regions/brain-thalamus.png",
  },
  {
    id: "hypothalamus",
    name: "Hypothalamus",
    description: "The hypothalamus controls many automatic functions including hunger, thirst, body temperature, and circadian rhythms. It links the nervous system to the endocrine system.",
    functions: ["hunger", "thirst", "eating", "drinking", "temperature", "sleep cycle", "hormones", "metabolism"],
    color: "#14B8A6",
    position: [0, -0.15, 0.35],
    scale: 0.12,
    imagePath: "/brain-regions/brain-hypothalamus.png",
  },
  {
    id: "brainstem",
    name: "Brain Stem",
    description: "The brain stem controls vital life functions including breathing, heart rate, blood pressure, and consciousness. It connects the brain to the spinal cord and regulates sleep-wake cycles and arousal.",
    functions: ["breathing", "heart rate", "consciousness", "arousal", "sleep-wake", "reflexes", "vital functions", "alertness", "autonomic"],
    color: "#FF6B6B",
    position: [0, -0.6, -0.3],
    scale: 0.25,
    imagePath: "/brain-regions/brain-stem.png",
  },
  {
    id: "parietal",
    name: "Parietal Lobe",
    description: "The parietal lobe processes spatial information and integrates sensory input. It's crucial for navigation, mathematical reasoning, spatial awareness, and coordinating movements with visual input.",
    functions: ["spatial awareness", "navigation", "math", "multitasking", "hand-eye coordination", "body awareness", "spatial reasoning", "orientation", "maps", "geometry"],
    color: "#FFA500",
    position: [0, 0.3, -0.3],
    scale: 0.32,
    imagePath: "/brain-regions/brain-parietal.png",
  },
  {
    id: "temporal",
    name: "Temporal Lobe",
    description: "The temporal lobe is essential for processing auditory information, memory formation, language comprehension, and recognizing faces. It plays a key role in emotional processing and long-term memory storage.",
    functions: ["memory formation", "auditory processing", "language", "face recognition", "emotional processing", "long-term memory", "hearing", "speech comprehension", "object recognition"],
    color: "#20C997",
    position: [0.6, -0.1, -0.1],
    scale: 0.28,
    imagePath: "/brain-regions/brain-temporal.png",
  },
];

export interface ActivityMapping {
  keywords: string[];
  regions: string[];
  description: string;
}

export const activityMappings: ActivityMapping[] = [
  {
    keywords: ["running", "jogging", "sprint"],
    regions: ["motor", "cerebellum", "sensory", "hypothalamus"],
    description: "Running activates the motor cortex for movement control, cerebellum for coordination, sensory cortex for body awareness, and hypothalamus for regulating body temperature and metabolism.",
  },
  {
    keywords: ["bicycle", "cycling", "biking"],
    regions: ["motor", "cerebellum", "visual", "sensory"],
    description: "Cycling engages the motor cortex for pedaling, cerebellum for balance, visual cortex for navigation, and sensory cortex for body position awareness.",
  },
  {
    keywords: ["math", "mathematics", "calculating", "algebra"],
    regions: ["prefrontal", "parietal", "hippocampus", "visual"],
    description: "Math problems heavily engage the prefrontal cortex for logical reasoning, parietal lobe for numerical and spatial processing, hippocampus for retrieving learned formulas, and visual cortex for processing numbers and symbols.",
  },
  {
    keywords: ["coding", "programming", "software", "developer"],
    regions: ["prefrontal", "broca", "visual", "hippocampus"],
    description: "Coding activates the prefrontal cortex for problem-solving, Broca's area for syntax processing, visual cortex for reading code, and hippocampus for recalling programming concepts.",
  },
  {
    keywords: ["music", "singing", "playing instrument"],
    regions: ["auditory", "motor", "cerebellum", "amygdala"],
    description: "Music engages the auditory cortex for sound processing, motor cortex for playing, cerebellum for timing, and amygdala for emotional response.",
  },
  {
    keywords: ["reading", "book", "studying"],
    regions: ["visual", "wernicke", "hippocampus", "prefrontal"],
    description: "Reading activates the visual cortex for text processing, Wernicke's area for comprehension, hippocampus for memory, and prefrontal cortex for focus.",
  },
  {
    keywords: ["speaking", "presentation", "talking"],
    regions: ["broca", "motor", "auditory", "prefrontal"],
    description: "Speaking engages Broca's area for speech production, motor cortex for mouth movements, auditory cortex for self-monitoring, and prefrontal cortex for organizing thoughts.",
  },
  {
    keywords: ["fear", "scared", "anxiety", "worried"],
    regions: ["amygdala", "prefrontal", "hypothalamus"],
    description: "Fear responses are processed by the amygdala, modulated by the prefrontal cortex, and trigger physical responses via the hypothalamus.",
  },
  {
    keywords: ["sleeping", "dreaming", "rest"],
    regions: ["thalamus", "hypothalamus", "hippocampus"],
    description: "Sleep is regulated by the thalamus and hypothalamus, while the hippocampus consolidates memories during REM sleep.",
  },
  {
    keywords: ["dancing", "choreography"],
    regions: ["motor", "cerebellum", "auditory", "visual", "hippocampus"],
    description: "Dancing integrates motor cortex for movement, cerebellum for coordination, auditory cortex for rhythm, visual cortex for spatial awareness, and hippocampus for remembering steps.",
  },
  {
    keywords: ["navigation", "gps", "directions", "wayfinding", "maps"],
    regions: ["parietal", "visual", "hippocampus", "prefrontal"],
    description: "Navigation activates the parietal lobe for spatial processing, visual cortex for map reading, hippocampus for spatial memory, and prefrontal cortex for route planning.",
  },
  {
    keywords: ["breathing exercises", "meditation", "mindfulness", "deep breathing"],
    regions: ["brainstem", "prefrontal", "amygdala", "thalamus"],
    description: "Breathing exercises engage the brain stem for respiratory control, prefrontal cortex for focus, amygdala for emotional regulation, and thalamus for awareness.",
  },
  {
    keywords: ["face recognition", "recognizing faces", "facial recognition"],
    regions: ["temporal", "visual", "amygdala", "hippocampus"],
    description: "Face recognition activates the temporal lobe for facial processing, visual cortex for visual input, amygdala for emotional significance, and hippocampus for memory retrieval.",
  },
  {
    keywords: ["spatial puzzle", "3d puzzle", "rubik's cube", "tetris", "spatial game"],
    regions: ["parietal", "prefrontal", "visual", "motor"],
    description: "Spatial puzzles engage the parietal lobe for spatial reasoning, prefrontal cortex for problem-solving, visual cortex for processing shapes, and motor cortex for manipulation.",
  },
];

export function findActiveRegions(query: string): { regions: BrainRegion[]; mapping: ActivityMapping | null } {
  const lowerQuery = query.toLowerCase();

  // First check activity mappings for complex activities
  for (const mapping of activityMappings) {
    if (mapping.keywords.some(keyword => lowerQuery.includes(keyword))) {
      const activeRegions = brainRegions.filter(region =>
        mapping.regions.includes(region.id)
      );
      return { regions: activeRegions, mapping };
    }
  }

  // Fall back to checking individual region functions
  const matchedRegions = brainRegions.filter(region =>
    region.functions.some(func => lowerQuery.includes(func.toLowerCase()))
  );

  return { regions: matchedRegions, mapping: null };
}

ZONING_RULES: dict[str, dict[str, list[str]]] = {
    "residential": {
        "allowed": ["Single-family homes", "Small home-based businesses", "Gardens"],
        "restricted": ["Industrial activity", "Large commercial developments"],
    },
    "commercial": {
        "allowed": ["Retail shops", "Offices", "Restaurants"],
        "restricted": ["Heavy manufacturing", "Residential-only construction without mixed-use permit"],
    },
    "mixed_use": {
        "allowed": ["Combined residential and commercial buildings", "Retail with upper-floor housing"],
        "restricted": ["Heavy industrial use"],
    },
    "restricted": {
        "allowed": [],
        "restricted": ["Any construction pending government review", "Land transfer without special approval"],
    },
}
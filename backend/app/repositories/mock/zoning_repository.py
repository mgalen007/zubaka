from app.core.zoning_rules import ZONING_RULES


class MockZoningRepository:
    def get_rules(self, zoning: str) -> dict[str, list[str]]:
        rules = ZONING_RULES.get(zoning, {"allowed": [], "restricted": []})
        return {
            "allowed": rules["allowed"].copy(),
            "restricted": rules["restricted"].copy(),
        }

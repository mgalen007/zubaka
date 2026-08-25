from groq import AsyncGroq

from app.core.config import get_settings

settings = get_settings()
client = AsyncGroq(api_key=settings.groq_api_key)


async def generate_explanation(
    upi: str,
    zoning: str,
    allowed: list[str],
    restricted: list[str],
) -> str:
    prompt = (
        f"A prospective homebuyer in Rwanda is looking at parcel {upi}, "
        f"zoned '{zoning}'. Allowed uses: {', '.join(allowed) or 'none'}. "
        f"Restricted uses: {', '.join(restricted) or 'none'}. "
        "In 2-3 plain-language sentences, explain what this zoning means "
        "for someone considering buying this plot. Do not invent legal "
        "details beyond what's given."
    )

    response = await client.chat.completions.create(
        model="openai/gpt-oss-120b",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.3,
        max_tokens=200,
    )

    content = response.choices[0].message.content
    return content or "No explanation generated."
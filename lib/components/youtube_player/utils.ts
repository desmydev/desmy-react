export function extractYouTubeVideoId(input?: string): string | null {
  if (!input) return null;

  // If it's already a video ID (not URL)
  if (!input.includes("http") && input.length >= 8 && input.length <= 16) {
    return input;
  }

  try {
    const url = new URL(input);

    // youtube.com/watch?v=VIDEO_ID
    if (url.hostname.includes("youtube.com")) {
      const v = url.searchParams.get("v");
      if (v) return v;

      // youtube.com/embed/VIDEO_ID
      const embedMatch = url.pathname.match(/\/embed\/([a-zA-Z0-9_-]+)/);
      if (embedMatch?.[1]) return embedMatch[1];

      // youtube.com/shorts/VIDEO_ID
      const shortsMatch = url.pathname.match(/\/shorts\/([a-zA-Z0-9_-]+)/);
      if (shortsMatch?.[1]) return shortsMatch[1];
    }

    // youtu.be/VIDEO_ID
    if (url.hostname.includes("youtu.be")) {
      const id = url.pathname.replace("/", "");
      return id || null;
    }

    return null;
  } catch {
    return null;
  }
}

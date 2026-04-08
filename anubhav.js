
    :root {
    --bg: #060912;
    --surface: rgba(15, 23, 42, 0.8);
    --surface - 2: rgba(30, 41, 59, 0.6);
    --border: rgba(255, 255, 255, 0.08);
    --border - hover: rgba(99, 179, 237, 0.4);
    --text: #f1f5f9;
    --muted: #94a3b8;
    --accent - blue: #38bdf8;
    --accent - purple: #a78bfa;
    --accent - green: #34d399;
    --accent - pink: #f472b6;
    --accent - amber: #fbbf24;
    --tag - bg: rgba(56, 189, 248, 0.12);
}

    * {
    box - sizing: border - box;
margin: 0;
padding: 0;
        }

    body {
    font - family: 'Inter', sans - serif;
    background - color: var(--bg);
    background - image:
    radial - gradient(ellipse at 10 % 0 %, rgba(56, 189, 248, 0.12) 0 %, transparent 50 %),
        radial - gradient(ellipse at 90 % 10 %, rgba(167, 139, 250, 0.1) 0 %, transparent 50 %),
        radial - gradient(ellipse at 50 % 100 %, rgba(52, 211, 153, 0.06) 0 %, transparent 50 %);
    background - attachment: fixed;
    color: var(--text);
    min - height: 100vh;
    overflow - x: hidden;
}

    /* ── HERO ── */
    .hero {
    text - align: center;
    padding: 5rem 2rem 4rem;
    position: relative;
}

    .hero::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50 %;
    transform: translateX(-50 %);
    width: 600px;
    height: 1px;
    background: linear - gradient(90deg, transparent, rgba(56, 189, 248, 0.4), transparent);
}

    .badge {
    display: inline - flex;
    align - items: center;
    gap: 0.5rem;
    background: rgba(56, 189, 248, 0.1);
    border: 1px solid rgba(56, 189, 248, 0.25);
    color: var(--accent - blue);
    font - size: 0.78rem;
    font - weight: 600;
    letter - spacing: 0.08em;
    text - transform: uppercase;
    padding: 0.35rem 1rem;
    border - radius: 999px;
    margin - bottom: 1.5rem;
}

    .badge - dot {
    width: 6px;
    height: 6px;
    border - radius: 50 %;
    background: var(--accent - green);
    box - shadow: 0 0 8px var(--accent - green);
    animation: pulse 2s infinite;
}

@keyframes pulse {

    0 %,
        100 % {
            opacity: 1;
            transform: scale(1);
        }

    50 % {
        opacity: 0.5;
        transform: scale(0.8);
    }
}

    .hero h1 {
    font - family: 'Outfit', sans - serif;
    font - size: clamp(2.2rem, 5vw, 3.8rem);
    font - weight: 800;
    line - height: 1.1;
    margin - bottom: 1.25rem;
    background: linear - gradient(135deg, #f1f5f9 0 %, #38bdf8 40 %, #a78bfa 100 %);
    -webkit - background - clip: text;
    -webkit - text - fill - color: transparent;
    background - clip: text;
}

    .hero p {
    color: var(--muted);
    font - size: 1.1rem;
    font - weight: 300;
    max - width: 600px;
    margin: 0 auto 2.5rem;
    line - height: 1.7;
}

    .tech - pills {
    display: flex;
    flex - wrap: wrap;
    justify - content: center;
    gap: 0.6rem;
    margin - bottom: 1rem;
}

    .pill {
    background: var(--surface - 2);
    border: 1px solid var(--border);
    border - radius: 999px;
    padding: 0.3rem 0.9rem;
    font - size: 0.78rem;
    font - family: 'Fira Code', monospace;
    color: var(--muted);
}

    /* ── STATS BAR ── */
    .stats - bar {
    display: flex;
    justify - content: center;
    gap: 0;
    max - width: 700px;
    margin: 3rem auto 0;
    background: var(--surface);
    border: 1px solid var(--border);
    border - radius: 16px;
    overflow: hidden;
    backdrop - filter: blur(12px);
}

    .stat {
    flex: 1;
    text - align: center;
    padding: 1.25rem 1rem;
    border - right: 1px solid var(--border);
}

    .stat: last - child {
    border - right: none;
}

    .stat - num {
    font - family: 'Outfit', sans - serif;
    font - size: 1.6rem;
    font - weight: 700;
    background: linear - gradient(135deg, var(--accent - blue), var(--accent - purple));
    -webkit - background - clip: text;
    -webkit - text - fill - color: transparent;
    background - clip: text;
}

    .stat - label {
    font - size: 0.72rem;
    color: var(--muted);
    text - transform: uppercase;
    letter - spacing: 0.06em;
    margin - top: 0.25rem;
}

    /* ── SECTION HEADER ── */
    .section - header {
    text - align: center;
    padding: 4rem 2rem 2rem;
}

    .section - header h2 {
    font - family: 'Outfit', sans - serif;
    font - size: 1.9rem;
    font - weight: 700;
    color: var(--text);
    margin - bottom: 0.5rem;
}

    .section - header p {
    color: var(--muted);
    font - size: 0.95rem;
}

    /* ── USE CASE CARDS ── */
    .cases {
    max - width: 1100px;
    margin: 0 auto;
    padding: 0 2rem 6rem;
    display: flex;
    flex - direction: column;
    gap: 4rem;
}

    .case -card {
    background: var(--surface);
    border: 1px solid var(--border);
    border - radius: 24px;
    overflow: hidden;
    backdrop - filter: blur(16px);
    transition: border - color 0.3s ease, box - shadow 0.3s ease;
    animation: fadeUp 0.6s ease both;
}

    .case -card:hover {
    border - color: var(--border - hover);
    box - shadow: 0 0 60px - 20px rgba(56, 189, 248, 0.15);
}

@keyframes fadeUp {
        from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

    .case -card: nth - child(1) {
    animation - delay: 0.1s;
}

    .case -card: nth - child(2) {
    animation - delay: 0.2s;
}

    .case -card: nth - child(3) {
    animation - delay: 0.3s;
}

    .case -card: nth - child(4) {
    animation - delay: 0.4s;
}

    /* Card header */
    .case -header {
    display: flex;
    align - items: center;
    gap: 1rem;
    padding: 1.75rem 2rem;
    border - bottom: 1px solid var(--border);
}

    .case -icon {
    width: 48px;
    height: 48px;
    border - radius: 14px;
    display: flex;
    align - items: center;
    justify - content: center;
    font - size: 1.4rem;
    flex - shrink: 0;
}

    .case -meta {
    flex: 1;
}

    .case -num {
    font - size: 0.7rem;
    font - weight: 600;
    text - transform: uppercase;
    letter - spacing: 0.1em;
    margin - bottom: 0.25rem;
}

    .case -title {
    font - family: 'Outfit', sans - serif;
    font - size: 1.25rem;
    font - weight: 700;
    color: var(--text);
}

    .case -sub {
    font - size: 0.82rem;
    color: var(--muted);
    margin - top: 0.2rem;
}

    .case -tags {
    display: flex;
    gap: 0.5rem;
    flex - wrap: wrap;
}

    .tag {
    font - size: 0.7rem;
    font - weight: 600;
    padding: 0.25rem 0.65rem;
    border - radius: 999px;
    border: 1px solid;
}

    /* Login info */
    .login - bar {
    display: flex;
    align - items: center;
    gap: 1rem;
    padding: 0.75rem 2rem;
    background: rgba(0, 0, 0, 0.2);
    border - bottom: 1px solid var(--border);
    font - family: 'Fira Code', monospace;
    font - size: 0.78rem;
}

    .login - label {
    color: var(--muted);
    font - family: 'Inter', sans - serif;
    font - size: 0.72rem;
    text - transform: uppercase;
    letter - spacing: 0.07em;
}

    .login - cred {
    color: var(--accent - green);
}

    .login - sep {
    color: var(--border);
}

    /* Screenshots */
    .screenshots {
    display: flex;
    flex - direction: column;
}

    .screenshot - wrap {
    position: relative;
    overflow: hidden;
    border - bottom: 1px solid var(--border);
}

    .screenshot - wrap: last - child {
    border - bottom: none;
}

    .screenshot - label {
    position: absolute;
    top: 12px;
    left: 12px;
    background: rgba(6, 9, 18, 0.85);
    backdrop - filter: blur(8px);
    border: 1px solid var(--border);
    border - radius: 8px;
    padding: 0.25rem 0.6rem;
    font - size: 0.68rem;
    color: var(--muted);
    font - weight: 500;
    z - index: 2;
}

    .screenshot - wrap img {
    width: 100 %;
    display: block;
    transition: transform 0.4s ease;
}

    .screenshot - wrap:hover img {
    transform: scale(1.02);
}

    /* Summary section */
    .case -summary {
    padding: 1.5rem 2rem;
    border - top: 1px solid var(--border);
    display: flex;
    align - items: flex - start;
    gap: 1rem;
}

    .summary - icon {
    font - size: 1rem;
    margin - top: 0.1rem;
    flex - shrink: 0;
}

    .summary - text {
    font - size: 0.85rem;
    color: var(--muted);
    line - height: 1.6;
}

    .summary - text strong {
    color: var(--text);
    font - weight: 600;
}

    /* ── COLOR THEMES PER CARD ── */
    /* Card 1 — Blue */
    .card - 1 .case - icon {
    background: rgba(56, 189, 248, 0.15);
}

    .card - 1 .case - num {
    color: var(--accent - blue);
}

    .card - 1 .tag - 1 {
    color: var(--accent - blue);
    border - color: rgba(56, 189, 248, 0.3);
    background: rgba(56, 189, 248, 0.08);
}

    /* Card 2 — Pink */
    .card - 2 .case - icon {
    background: rgba(244, 114, 182, 0.15);
}

    .card - 2 .case - num {
    color: var(--accent - pink);
}

    .card - 2 .tag - 1 {
    color: var(--accent - pink);
    border - color: rgba(244, 114, 182, 0.3);
    background: rgba(244, 114, 182, 0.08);
}

    /* Card 3 — Amber */
    .card - 3 .case - icon {
    background: rgba(251, 191, 36, 0.15);
}

    .card - 3 .case - num {
    color: var(--accent - amber);
}

    .card - 3 .tag - 1 {
    color: var(--accent - amber);
    border - color: rgba(251, 191, 36, 0.3);
    background: rgba(251, 191, 36, 0.08);
}

    /* Card 4 — Green */
    .card - 4 .case - icon {
    background: rgba(52, 211, 153, 0.15);
}

    .card - 4 .case - num {
    color: var(--accent - green);
}

    .card - 4 .tag - 1 {
    color: var(--accent - green);
    border - color: rgba(52, 211, 153, 0.3);
    background: rgba(52, 211, 153, 0.08);
}

    /* shared tag style */
    .tag - 2 {
    color: var(--accent - purple);
    border - color: rgba(167, 139, 250, 0.3);
    background: rgba(167, 139, 250, 0.08);
}

    .tag - 3 {
    color: var(--muted);
    border - color: var(--border);
    background: rgba(255, 255, 255, 0.04);
}

    /* ── FOOTER ── */
    footer {
    text - align: center;
    padding: 2rem;
    border - top: 1px solid var(--border);
    color: var(--muted);
    font - size: 0.78rem;
}

    footer span {
    color: var(--accent - blue);
}

/* ── RESPONSIVE ── */
@media(max - width: 700px) {
            .stats - bar {
        flex - direction: column;
    }

    .stat {
        border - right: none;
        border - bottom: 1px solid var(--border);
    }

    .stat: last - child {
        border - bottom: none;
    }

    .case -header {
        flex - wrap: wrap;
    }

    .case -tags {
        margin - top: 0.5rem;
    }

    .login - bar {
        flex - wrap: wrap;
        gap: 0.5rem;
    }
}

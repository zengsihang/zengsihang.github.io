CREATE TABLE IF NOT EXISTS visits (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  visitor_hash TEXT NOT NULL,
  country TEXT NOT NULL,
  city TEXT,
  latitude REAL NOT NULL,
  longitude REAL NOT NULL,
  bucket_date TEXT NOT NULL,
  visited_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(visitor_hash, bucket_date)
);

CREATE INDEX IF NOT EXISTS idx_visits_visited_at ON visits(visited_at);

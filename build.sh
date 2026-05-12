#!/usr/bin/env bash
# Build COMPENDIUM.docx from COMPENDIUM.md
# Usage: ./build.sh           (one-shot rebuild)
#        ./build.sh --watch   (rebuild on every save; requires fswatch)
#        ./build.sh --open    (rebuild and open the result)

set -euo pipefail

cd "$(dirname "$0")"

SRC="COMPENDIUM.md"
OUT="COMPENDIUM.docx"
REF="reference.docx"

build() {
  if [[ ! -f "$SRC" ]]; then
    echo "error: $SRC not found" >&2
    exit 1
  fi

  local ref_args=()
  if [[ -f "$REF" ]]; then
    ref_args=(--reference-doc="$REF")
  else
    echo "note: $REF not found — using pandoc defaults" >&2
  fi

  pandoc "$SRC" \
    -o "$OUT" \
    -f gfm+yaml_metadata_block+raw_attribute \
    -t docx \
    --toc \
    --toc-depth=3 \
    "${ref_args[@]}"

  echo "✓ built $OUT  ($(date +%H:%M:%S))"
}

case "${1:-}" in
  --watch)
    if ! command -v fswatch >/dev/null 2>&1; then
      echo "fswatch not installed. brew install fswatch" >&2
      exit 1
    fi
    build
    echo "watching $SRC … (Ctrl-C to stop)"
    fswatch -o "$SRC" | while read -r _; do build; done
    ;;
  --open)
    build
    open "$OUT"
    ;;
  *)
    build
    ;;
esac

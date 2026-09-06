"""Package the self-contained Objectives prototype without runtime dependencies."""
from pathlib import Path
import shutil
root = Path(__file__).resolve().parent
out = root / 'dist'
if out.exists():
    shutil.rmtree(out)
out.mkdir()
for name in ['objectives-prototype.html', 'objectives.css', 'objectives.js']:
    shutil.copy2(root / name, out / name)
shutil.copy2(root / 'objectives-prototype.html', out / 'index.html')
shutil.copytree(root / 'objectives-assets', out / 'objectives-assets', dirs_exist_ok=True)
print('Built Objectives prototype in dist/')

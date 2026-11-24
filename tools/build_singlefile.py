from pathlib import Path
import re
root=Path(__file__).resolve().parents[1]
s=(root/'index.html').read_text()
s=re.sub(r'<link rel="stylesheet" href="style\.css(?:\?[^"]*)?">',lambda _: '<style>'+ (root/'style.css').read_text()+'</style>',s)
for n in ('engine','secrets','content','horror','campaign','ai','art','models','pixel-assets','boss-frames','enemy-frames','pixel','environment-assets','environment','render','webgl','weapon-art','score','sound','companion','game'):
 s=re.sub(r'<script src="src/'+re.escape(n)+r'\.js(?:\?[^"]*)?"></script>',lambda _: '<script>'+ (root/f'src/{n}.js').read_text().replace('</script','<\\/script')+'</script>',s)
(root/'JUGAR-SIN-INSTALAR.html').write_text(s)

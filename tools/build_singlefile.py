from pathlib import Path
root=Path(__file__).resolve().parents[1]
s=(root/'index.html').read_text()
s=s.replace('<link rel="stylesheet" href="style.css">','<style>'+ (root/'style.css').read_text()+'</style>')
for n in ('engine','secrets','content','horror','campaign','ai','art','models','pixel-assets','boss-frames','enemy-frames','pixel','environment-assets','environment','render','webgl','weapon-art','score','sound','companion','game'):
 s=s.replace(f'<script src="src/{n}.js"></script>','<script>'+ (root/f'src/{n}.js').read_text().replace('</script','<\\/script')+'</script>')
(root/'JUGAR-SIN-INSTALAR.html').write_text(s)

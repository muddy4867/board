import fs from 'node:fs';import path from 'node:path';
const root=path.resolve(import.meta.dirname,'..'),out=path.join(root,'docs');fs.mkdirSync(out,{recursive:true});
for(const file of ['index.html','app.js','collection.js','manifest.webmanifest','install.js','sw.js','icon-192.png','icon-512.png'])fs.copyFileSync(path.join(root,'web',file),path.join(out,file));
const style=fs.readFileSync(path.join(root,'web/style.css'),'utf8')+'\n'+fs.readFileSync(path.join(root,'web/enhancements.css'),'utf8');fs.writeFileSync(path.join(out,'style.css'),style);
let enhancements=fs.readFileSync(path.join(root,'web/enhancements.js'),'utf8');enhancements=enhancements.replace('<form method="post" action="/lock" class="lock-form"><button class="header-lock" type="submit">잠금</button></form>','');enhancements=enhancements.split('\n').filter(line=>!line.startsWith('let lastActive=')).join('\n');
fs.writeFileSync(path.join(out,'enhancements.js'),enhancements);fs.writeFileSync(path.join(out,'.nojekyll'),'');
console.log('Built public static site in docs/ (no login or password protection)');

fs.cpSync(path.join(root,'web/previews'),path.join(out,'previews'),{recursive:true});

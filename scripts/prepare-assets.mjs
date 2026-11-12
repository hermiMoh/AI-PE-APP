import {mkdir,cp,writeFile} from 'node:fs/promises';
import {join} from 'node:path';
const root=process.cwd();
await mkdir(join(root,'public/wasm'),{recursive:true});
await mkdir(join(root,'public/models'),{recursive:true});
for(const name of ['vision_wasm_internal.wasm','vision_wasm_internal.js','vision_wasm_nosimd_internal.wasm','vision_wasm_nosimd_internal.js']){
 await cp(join(root,'node_modules/@mediapipe/tasks-vision/wasm',name),join(root,'public/wasm',name));
}
const url='https://storage.googleapis.com/mediapipe-models/pose_landmarker/pose_landmarker_lite/float16/1/pose_landmarker_lite.task';
const response=await fetch(url,{signal:AbortSignal.timeout(120000)});
if(!response.ok)throw Error(`Model download failed at build time: ${response.status}`);
const bytes=new Uint8Array(await response.arrayBuffer());
if(bytes.byteLength<100000)throw Error('Downloaded model is unexpectedly small');
await writeFile(join(root,'public/models/pose_landmarker_lite.task'),bytes);
console.log(`Bundled pose model: ${bytes.byteLength} bytes`);

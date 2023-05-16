import esbuild from 'esbuild';

async function build() {
  await esbuild.build({
    entryPoints: ['index.js'],
    outfile: 'bundle.js',
    format: 'iife',
    bundle: true,
    loader: { '.js': 'jsx' },

  });
}

build();
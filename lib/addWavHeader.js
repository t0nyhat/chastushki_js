/* thanks to https://github.com/zx-kapok */

const addWavHeader = function (samples, sampleRateTmp, sampleBits, channelCount) {
  const dataLength = samples.byteLength;
  const buffer = new ArrayBuffer(44 + dataLength);
  const view = new DataView(buffer);

  function writeString(view, offset, string) {
    for (let i = 0; i < string.length; i++) {
      view.setUint8(offset + i, string.charCodeAt(i));
    }
  }
  let offset = 0;
  writeString(view, offset, 'RIFF');
  offset += 4;
  view.setUint32(offset, /* 32 */ 36 + dataLength, true);
  offset += 4;
  writeString(view, offset, 'WAVE');
  offset += 4;
  writeString(view, offset, 'fmt ');
  offset += 4;
  view.setUint32(offset, 16, true);
  offset += 4;
  view.setUint16(offset, 1, true);
  offset += 2;
  view.setUint16(offset, channelCount, true);
  offset += 2;
  view.setUint32(offset, sampleRateTmp, true);
  offset += 4;
  view.setUint32(offset, sampleRateTmp * channelCount * (sampleBits / 8), true);
  offset += 4;
  view.setUint16(offset, channelCount * (sampleBits / 8), true);
  offset += 2;
  view.setUint16(offset, sampleBits, true);
  offset += 2;
  writeString(view, offset, 'data');
  offset += 4;
  view.setUint32(offset, dataLength, true);
  offset += 4;

  function floatTo16BitPCM(output, offset, input) {
    input = new Int16Array(input);
    for (let i = 0; i < input.length; i++, offset += 2) {
      output.setInt16(offset, input[i], true);
    }
  }

  floatTo16BitPCM(view, 44, samples);
  return view.buffer;
};

module.exports = { addWavHeader };

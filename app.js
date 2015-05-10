'use strict';

import React from 'react';
import Dropzone from './components/drop';

class App extends React.Component {

  displayName: 'App'

  constructor() {
    super();

    this.state = {
      format: 'html',
      file: null
    }
  }

  setFormat(e) {
    this.setState({
      format: e.target.value
    });
  }

  convert() {
    let { format, file } = this.state;
    var spawn = node('child_process').spawn;

    // var pdc = node('pdc');
    // var fs = node('fs');

    // var content = fs.readFileSync(files[0].path).toString();
    // pdc(content, 'markdown', format, function(err, result) {
    //   if (err) {
    //     throw err;
    //     return;
    //   }

    //   fs.writeFile(`test.${format}`, result, function(err) {
    //     console.log('write file success', `test.${format}`);
    //   });
    // });

    let path = node('path');
    let base = path.basename(file.path, path.extname(file.path));

    // pandoc resume.md -o resume.pdf
    var ps = spawn('pandoc', [file.path, '-o', `${base}.${format}`]);

    ps.stdout.on('data', function (data) {
      console.log('stdout: ' + data);
    });

    ps.stderr.on('data', function (data) {
      console.log('stderr: ' + data);
    });

    ps.on('close', function (code) {
      console.log('child process exited with code ' + code);
    });
  }

  onDrop(files) {
    this.setState({
      file: files[0]
    });
  }

  render() {
    let { format } = this.state;

    return (
      <div>
        <section>
          <select defaultValue={format} onChange={this.setFormat.bind(this)}>
            <option value="pdf">PDF</option>
            <option value="html">HTML</option>
            <option value="docx">Docx</option>
          </select>
        </section>

        <button onClick={this.convert.bind(this)}>Convert</button>
        <Dropzone onDrop={this.onDrop.bind(this)} multiple={false} size={150} >
          <div>Try dropping some files here, or click to select files to upload.</div>
        </Dropzone>
      </div>
    )
  }

}

React.render(<App />, document.body);

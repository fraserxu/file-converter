'use strict';

import React from 'react';
import Dropzone from './components/drop';

// node
let path = node('path');
let spawn = node('child_process').spawn;

class App extends React.Component {

  displayName: 'App'

  constructor() {
    super();

    this.state = {
      format: 'html',
      file: null,
      msg: {
        type: null,
        content: null
      }
    }
  }

  setFormat(e) {
    this.setState({
      format: e.target.value
    });
  }

  convert() {
    let { format, file } = this.state;
    let base = path.basename(file.path, path.extname(file.path));

    // pandoc resume.md -o resume.pdf
    let ps = spawn('pandoc', [file.path, '-o', `${base}.${format}`]);

    ps.stdout.on('data', (data) => {
      console.log('stdout: ' + data);
    });

    ps.stderr.on('data', (data) => {
      this.setState({
        msg: {
          type: 'err',
          content: 'Convert Failed!' + data
        }
      });
    });

    ps.on('close', (code) => {
      this.setState({
        msg: {
          type: 'success',
          content: 'Convert success!'
        }
      });
    });
  }

  onDrop(files) {
    this.setState({
      file: files[0]
    });
  }

  render() {
    let { file, format, msg } = this.state;

    return (
      <div className='main'>
        <header>
          <span className='label'>Convert file into:</span>
          <select defaultValue={format} onChange={this.setFormat.bind(this)}>
            <option value="pdf">PDF</option>
            <option value="html">HTML</option>
            <option value="docx">Docx</option>
          </select>

          <button onClick={this.convert.bind(this)} disabled={!file}>Convert</button>

          { msg.content &&
            <span style={{color: msg.type === 'err' ? 'red' : 'green', marginLeft: '20px'}}>{ msg.content }</span>
          }

        </header>

        <main>
          <Dropzone onDrop={this.onDrop.bind(this)} multiple={false} size={300} >
            { file &&
              <div className='placeholder'>{path.basename(file.path)}</div>
            }
            { !file &&
              <div className='placeholder'>Select the file you want to convert.</div>
            }
          </Dropzone>
        </main>
      </div>
    )
  }

}

React.render(<App />, document.body);

import React from 'react';
import FormRender from 'form-render/lib/antd';
import SCHEMA from './schema.json';
import 'antd/dist/antd.css';

class App extends React.Component {
  state = { formData: SCHEMA.formData || {} };

  onChange = formData => {
    this.setState({ formData });
  };

  onValidate = valid => {
    console.log('没有通过的校验:', valid);
  };

  render() {
    const { propsSchema, uiSchema } = SCHEMA;
    const { formData } = this.state;
    return (
      <div style={{ width: '50%' }}>
        <FormRender
          propsSchema={propsSchema}
          uiSchema={uiSchema}
          formData={formData}
          onChange={this.onChange}
          onValidate={this.onValidate}
        />
      </div>
    );
  }
}

export default App;

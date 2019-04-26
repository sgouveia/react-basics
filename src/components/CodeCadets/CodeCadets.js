import React from 'react';
import CodeCadet from './CodeCadet/CodeCadet';

const codeCadets = props => {
  return (props.codeCadets.map((codeCadet, index) => {
    return (
        <CodeCadet
            clicked={() =>
                props.clicked(index)
            }
            changed={event =>
                props.changed(event, codeCadet.id)
            }
            name={codeCadet.name}
            age={codeCadet.age}
            key={codeCadet.id}
        />
    );
}))
}

export default codeCadets;
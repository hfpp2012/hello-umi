import * as React from 'react';

export default function(props: any) {
  return <div>hello {props.match.params.id}</div>;
}

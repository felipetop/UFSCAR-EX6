import React from 'react';

type HocProps = {
};

type HocState = {
  readonly hasError: string | null | undefined;
};

class ErrorBoundary extends React.Component<HocProps, HocState> {
  
  readonly state: HocState = {
    hasError: undefined,
  };

  constructor(props) {
    super(props);
    this.state = { hasError: undefined };
  }

  static getDerivedStateFromError(error) {
    return { hasError: 'Algo deu errado' };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    if (hasError) {
      return (
        <div>
          <h1>Erro:</h1>
          <div>{hasError}</div>
        </div>
        );
    }

    return this.props.children; 
  }
}

export default ErrorBoundary;
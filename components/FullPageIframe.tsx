type FullPageIframeProps = {
    src: string;
  };
  
  const FullPageIframe = ({ src }: FullPageIframeProps) => {
    return (
      <div className="fixed pt-16 inset-0">
        <iframe
          src={src}
          style={{ border: 'none' }}
          width="100%"
          height="100%"
          // padding
        />
      </div>
    );
  };
  
  export default FullPageIframe;
  
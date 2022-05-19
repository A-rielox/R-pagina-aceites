export const ToTop = props => {
   return (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
         <path
            style={{
               fill: props.fill,
            }}
            d="M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11Zm0-2a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm1-10.586V17h-2v-6.586l-2.293 2.293-1.414-1.414L12 6.586l4.707 4.707-1.414 1.414L13 10.414Z"
         />
      </svg>
   );
};

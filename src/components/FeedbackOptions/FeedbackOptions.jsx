
import PropTypes from 'prop-types';
import {Btn, containerBtn} from './FeedbackOptions.styled'
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
   return (
      <div>
         {options.map(name => {
            return (
               <containerBtn key={name}>
                  <Btn
                     onClick={() => onLeaveFeedback(name)}
                     type="button"
                     name={name}
                  >
                     {name}
                  </Btn>
               </containerBtn>
            );
         })}
      </div>
   );
};

FeedbackOptions.propTypes = {
   options: PropTypes.arrayOf(PropTypes.string.isRequired),
   onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
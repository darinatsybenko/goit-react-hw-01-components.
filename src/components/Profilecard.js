import PropTypes from 'prop-types';
import { Information} from '../components/Information';
import { Stats } from '../components/Stats';
export const Profilecard = ({items}) => {
    return <div>
        <Information info={items} />
        <Stats stat={items} />
    </div>
    };

    Profilecard.protoType = {
    items: PropTypes.shape().isRequired
    }
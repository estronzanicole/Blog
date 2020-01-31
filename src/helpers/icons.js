import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faTrash,
    faSignOutAlt,
    faBook,
    faMapPin,
    faMobileAlt,
    faPaperPlane
} from "@fortawesome/free-solid-svg-icons";


const Icons = () => {
    return library.add(faTrash, faSignOutAlt, faBook, faMapPin, faMobileAlt, faPaperPlane)
};

export default Icons;
// Import stylesheets
import './style.css';

enum NbLayoutDirection {
    LTR = "ltr",
    RTL = "rtl"
}

const ggg = (true) ? NbLayoutDirection.LTR : NbLayoutDirection.RTL;

console.log(ggg);
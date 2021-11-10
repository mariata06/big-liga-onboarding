import {ieFix} from './utils/ie-fix';
import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/init-modals';
import {animatePreloader} from './modules/preloader';
import {animateBlock} from './modules/mainscreenblock';

// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------

initModals();
animatePreloader();
animateBlock();

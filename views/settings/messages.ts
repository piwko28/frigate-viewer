import {MessageDescriptor} from 'react-intl';
import {makeMessages} from '../../helpers/locale';

export const messages = makeMessages('settings', {
  'topBar.title': 'Settings',
  'error.required': 'This field is required.',
  'error.min': 'Minimum value is {min}.',
  'error.max': 'Maximum value is {max}',
  'action.save': 'Save',
  'action.cancel': 'Cancel',
  'server.header': 'Server',
  'server.protocol.label': 'Protocol',
  'server.host.label': 'Host',
  'server.port.label': 'Port',
  'server.useDemoServerButton': 'Use demo server',
  'locale.header': 'Locale',
  'locale.region.label': 'Region',
  'locale.region.option.en_AU': 'Australia (English)',
  'locale.region.option.en_CA': 'Canada (English)',
  'locale.region.option.en_GB': 'Great Britain (English)',
  'locale.region.option.en_IE': 'Ireland (English)',
  'locale.region.option.en_NZ': 'New Zealand (English)',
  'locale.region.option.en_US': 'United States (English)',
  'locale.region.option.de_AT': 'Austria (German)',
  'locale.region.option.de_DE': 'Germany (German)',
  'locale.region.option.de_LU': 'Luxembourg (German)',
  'locale.region.option.de_CH': 'Switzerland (German)',
  'locale.region.option.es_AR': 'Argentina (Spanish)',
  'locale.region.option.es_BO': 'Bolivia (Spanish)',
  'locale.region.option.es_CL': 'Chile (Spanish)',
  'locale.region.option.es_CO': 'Columbia (Spanish)',
  'locale.region.option.es_CR': 'Costa Rica (Spanish)',
  'locale.region.option.es_DO': 'Dominican Republic (Spanish)',
  'locale.region.option.es_EC': 'Ecuador (Spanish)',
  'locale.region.option.es_ES': 'Spain (Spanish)',
  'locale.region.option.es_GT': 'Guatemala (Spanish)',
  'locale.region.option.es_HN': 'Honduras (Spanish)',
  'locale.region.option.es_MX': 'Mexico (Spanish)',
  'locale.region.option.es_NI': 'Nicaragua (Spanish)',
  'locale.region.option.es_PA': 'Panama (Spanish)',
  'locale.region.option.es_PE': 'Peru (Spanish)',
  'locale.region.option.es_PY': 'Paraguay (Spanish)',
  'locale.region.option.es_SV': 'El Salvador (Spanish)',
  'locale.region.option.es_UY': 'Uruguay (Spanish)',
  'locale.region.option.es_VE': 'Venezuela (Spanish)',
  'locale.region.option.fr_CA': 'Canada (French)',
  'locale.region.option.fr_CH': 'Switzerland (French)',
  'locale.region.option.fr_FR': 'France (French)',
  'locale.region.option.pl_PL': 'Poland (Polish)',
  'locale.region.option.pt_PT': 'Portugal (Portuguese)',
  'locale.region.option.pt_BR': 'Brazil (Portuguese)',
  'locale.region.option.uk_UA': 'Ukraine (Ukrainian)',
  'locale.datesDisplay.label': 'Dates display',
  'locale.datesDisplay.option.descriptive': 'Descriptive',
  'locale.datesDisplay.option.numeric': 'Numeric',
  'cameras.header': 'Cameras',
  'cameras.imageRefreshFrequency.label': 'Image refresh frequency (seconds)',
  'cameras.numberOfColumns.label': 'Number of columns',
  'events.header': 'Events',
  'events.numberOfColumns.label': 'Number of columns',
  'events.photoPreference.label': 'Photo preference',
  'events.photoPreference.option.snapshot': 'Snapshot',
  'events.photoPreference.option.thumbnail': 'Thumbnail',
  'toast.noServerData': 'You need to provide frigate nvr server data.',
});

export type MessageKey = typeof messages extends Record<
  infer R,
  MessageDescriptor
>
  ? R
  : never;

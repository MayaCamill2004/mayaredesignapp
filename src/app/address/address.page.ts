import { Component } from '@angular/core';
import { Router } from '@angular/router';  
import { CartService } from '../cart.service';

@Component({
  selector: 'app-address',
  templateUrl: 'address.page.html',
  styleUrls: ['address.page.scss'],
})
export class AddressPage {
  fullAddress: string = ''; 


  firstName: string = '';
  lastName: string = '';
  mobile: string = '';
  selectedCountry: string = '';
  address: string = '';
  townCity: string = '';
  postcode: string = '';
  selectedDeliveryAddress: string = ''; 

  countries: any[] = [
    { label: 'Afghanistan', value: 'AF' },
    { label: 'Albania', value: 'AL' },
    { label: 'Algeria', value: 'DZ' },
    { label: 'Andorra', value: 'AD' },
    { label: 'Angola', value: 'AO' },
    { label: 'Antigua and Barbuda', value: 'AG' },
    { label: 'Argentina', value: 'AR' },
    { label: 'Armenia', value: 'AM' },
    { label: 'Australia', value: 'AU' },
    { label: 'Austria', value: 'AT' },
    { label: 'Azerbaijan', value: 'AZ' },
    { label: 'Bahamas', value: 'BS' },
    { label: 'Bahrain', value: 'BH' },
    { label: 'Bangladesh', value: 'BD' },
    { label: 'Barbados', value: 'BB' },
    { label: 'Belarus', value: 'BY' },
    { label: 'Belgium', value: 'BE' },
    { label: 'Belize', value: 'BZ' },
    { label: 'Benin', value: 'BJ' },
    { label: 'Bhutan', value: 'BT' },
    { label: 'Bolivia', value: 'BO' },
    { label: 'Bosnia and Herzegovina', value: 'BA' },
    { label: 'Botswana', value: 'BW' },
    { label: 'Brazil', value: 'BR' },
    { label: 'Brunei', value: 'BN' },
    { label: 'Bulgaria', value: 'BG' },
    { label: 'Burkina Faso', value: 'BF' },
    { label: 'Burundi', value: 'BI' },
    { label: 'Cabo Verde', value: 'CV' },
    { label: 'Cambodia', value: 'KH' },
    { label: 'Cameroon', value: 'CM' },
    { label: 'Canada', value: 'CA' },
    { label: 'Central African Republic', value: 'CF' },
    { label: 'Chad', value: 'TD' },
    { label: 'Chile', value: 'CL' },
    { label: 'China', value: 'CN' },
    { label: 'Colombia', value: 'CO' },
    { label: 'Comoros', value: 'KM' },
    { label: 'Congo (Congo-Brazzaville)', value: 'CG' },
    { label: 'Costa Rica', value: 'CR' },
    { label: 'Croatia', value: 'HR' },
    { label: 'Cuba', value: 'CU' },
    { label: 'Cyprus', value: 'CY' },
    { label: 'Czechia (Czech Republic)', value: 'CZ' },
    { label: 'Democratic Republic of the Congo', value: 'CD' },
    { label: 'Denmark', value: 'DK' },
    { label: 'Djibouti', value: 'DJ' },
    { label: 'Dominica', value: 'DM' },
    { label: 'Dominican Republic', value: 'DO' },
    { label: 'Ecuador', value: 'EC' },
    { label: 'Egypt', value: 'EG' },
    { label: 'El Salvador', value: 'SV' },
    { label: 'Equatorial Guinea', value: 'GQ' },
    { label: 'Eritrea', value: 'ER' },
    { label: 'Estonia', value: 'EE' },
    { label: 'Eswatini (fmr. "Swaziland")', value: 'SZ' },
    { label: 'Ethiopia', value: 'ET' },
    { label: 'Fiji', value: 'FJ' },
    { label: 'Finland', value: 'FI' },
    { label: 'France', value: 'FR' },
    { label: 'Gabon', value: 'GA' },
    { label: 'Gambia', value: 'GM' },
    { label: 'Georgia', value: 'GE' },
    { label: 'Germany', value: 'DE' },
    { label: 'Ghana', value: 'GH' },
    { label: 'Greece', value: 'GR' },
    { label: 'Grenada', value: 'GD' },
    { label: 'Guatemala', value: 'GT' },
    { label: 'Guinea', value: 'GN' },
    { label: 'Guinea-Bissau', value: 'GW' },
    { label: 'Guyana', value: 'GY' },
    { label: 'Haiti', value: 'HT' },
    { label: 'Holy See', value: 'VA' },
    { label: 'Honduras', value: 'HN' },
    { label: 'Hungary', value: 'HU' },
    { label: 'Iceland', value: 'IS' },
    { label: 'India', value: 'IN' },
    { label: 'Indonesia', value: 'ID' },
    { label: 'Iran', value: 'IR' },
    { label: 'Iraq', value: 'IQ' },
    { label: 'Ireland', value: 'IE' },
    { label: 'Israel', value: 'IL' },
    { label: 'Italy', value: 'IT' },
    { label: 'Ivory Coast', value: 'CI' },
    { label: 'Jamaica', value: 'JM' },
    { label: 'Japan', value: 'JP' },
    { label: 'Jordan', value: 'JO' },
    { label: 'Kazakhstan', value: 'KZ' },
    { label: 'Kenya', value: 'KE' },
    { label: 'Kiribati', value: 'KI' },
    { label: 'Kuwait', value: 'KW' },
    { label: 'Kyrgyzstan', value: 'KG' },
    { label: 'Laos', value: 'LA' },
    { label: 'Latvia', value: 'LV' },
    { label: 'Lebanon', value: 'LB' },
    { label: 'Lesotho', value: 'LS' },
    { label: 'Liberia', value: 'LR' },
    { label: 'Libya', value: 'LY' },
    { label: 'Liechtenstein', value: 'LI' },
    { label: 'Lithuania', value: 'LT' },
    { label: 'Luxembourg', value: 'LU' },
    { label: 'Madagascar', value: 'MG' },
    { label: 'Malawi', value: 'MW' },
    { label: 'Malaysia', value: 'MY' },
    { label: 'Maldives', value: 'MV' },
    { label: 'Mali', value: 'ML' },
    { label: 'Malta', value: 'MT' },
    { label: 'Marshall Islands', value: 'MH' },
    { label: 'Mauritania', value: 'MR' },
    { label: 'Mauritius', value: 'MU' },
    { label: 'Mexico', value: 'MX' },
    { label: 'Micronesia', value: 'FM' },
    { label: 'Moldova', value: 'MD' },
    { label: 'Monaco', value: 'MC' },
    { label: 'Mongolia', value: 'MN' },
    { label: 'Montenegro', value: 'ME' },
    { label: 'Morocco', value: 'MA' },
    { label: 'Mozambique', value: 'MZ' },
    { label: 'Myanmar (formerly Burma)', value: 'MM' },
    { label: 'Namibia', value: 'NA' },
    { label: 'Nauru', value: 'NR' },
    { label: 'Nepal', value: 'NP' },
    { label: 'Netherlands', value: 'NL' },
    { label: 'New Zealand', value: 'NZ' },
    { label: 'Nicaragua', value: 'NI' },
    { label: 'Niger', value: 'NE' },
    { label: 'Nigeria', value: 'NG' },
    { label: 'North Korea', value: 'KP' },
    { label: 'North Macedonia', value: 'MK' },
    { label: 'Norway', value: 'NO' },
    { label: 'Oman', value: 'OM' },
    { label: 'Pakistan', value: 'PK' },
    { label: 'Palau', value: 'PW' },
    { label: 'Palestine State', value: 'PS' },
    { label: 'Panama', value: 'PA' },
    { label: 'Papua New Guinea', value: 'PG' },
    { label: 'Paraguay', value: 'PY' },
    { label: 'Peru', value: 'PE' },
    { label: 'Philippines', value: 'PH' },
    { label: 'Poland', value: 'PL' },
    { label: 'Portugal', value: 'PT' },
    { label: 'Qatar', value: 'QA' },
    { label: 'Romania', value: 'RO' },
    { label: 'Russia', value: 'RU' },
    { label: 'Rwanda', value: 'RW' },
    { label: 'Saint Kitts and Nevis', value: 'KN' },
    { label: 'Saint Lucia', value: 'LC' },
    { label: 'Saint Vincent and the Grenadines', value: 'VC' },
    { label: 'Samoa', value: 'WS' },
    { label: 'San Marino', value: 'SM' },
    { label: 'Sao Tome and Principe', value: 'ST' },
    { label: 'Saudi Arabia', value: 'SA' },
    { label: 'Senegal', value: 'SN' },
    { label: 'Serbia', value: 'RS' },
    { label: 'Seychelles', value: 'SC' },
    { label: 'Sierra Leone', value: 'SL' },
    { label: 'Singapore', value: 'SG' },
    { label: 'Slovakia', value: 'SK' },
    { label: 'Slovenia', value: 'SI' },
    { label: 'Solomon Islands', value: 'SB' },
    { label: 'Somalia', value: 'SO' },
    { label: 'South Africa', value: 'ZA' },
    { label: 'South Korea', value: 'KR' },
    { label: 'South Sudan', value: 'SS' },
    { label: 'Spain', value: 'ES' },
    { label: 'Sri Lanka', value: 'LK' },
    { label: 'Sudan', value: 'SD' },
    { label: 'Suriname', value: 'SR' },
    { label: 'Sweden', value: 'SE' },
    { label: 'Switzerland', value: 'CH' },
    { label: 'Syria', value: 'SY' },
    { label: 'Tajikistan', value: 'TJ' },
    { label: 'Tanzania', value: 'TZ' },
    { label: 'Thailand', value: 'TH' },
    { label: 'Timor-Leste', value: 'TL' },
    { label: 'Togo', value: 'TG' },
    { label: 'Tonga', value: 'TO' },
    { label: 'Trinidad and Tobago', value: 'TT' },
    { label: 'Tunisia', value: 'TN' },
    { label: 'Turkey', value: 'TR' },
    { label: 'Turkmenistan', value: 'TM' },
    { label: 'Tuvalu', value: 'TV' },
    { label: 'Uganda', value: 'UG' },
    { label: 'Ukraine', value: 'UA' },
    { label: 'United Arab Emirates', value: 'AE' },
    { label: 'United Kingdom', value: 'GB' },
    { label: 'United States of America', value: 'US' },
    { label: 'Uruguay', value: 'UY' },
    { label: 'Uzbekistan', value: 'UZ' },
    { label: 'Vanuatu', value: 'VU' },
    { label: 'Venezuela', value: 'VE' },
    { label: 'Vietnam', value: 'VN' },
    { label: 'Yemen', value: 'YE' },
    { label: 'Zambia', value: 'ZM' },
    { label: 'Zimbabwe', value: 'ZW' },
  ];
  constructor(
    private router: Router,
    private cartService: CartService 
  ) {
  }
  confirmAddress(): void {

    this.fullAddress = [
      this.firstName,
      this.lastName,
      this.mobile,
      this.selectedCountry,
      this.address,
      this.townCity,
      this.postcode,
    ].join(', '); 
    this.cartService.setAddress(this.fullAddress);

    // Navigate back to the checkout 
    this.router.navigate(['/checkoutm']);
  }

  isFormValid(): boolean {
    return (
      this.firstName.trim() !== '' &&
      this.lastName.trim() !== '' &&
      this.mobile.trim() !== '' &&
      this.selectedCountry.trim() !== '' &&
      this.address.trim() !== '' &&
      this.townCity.trim() !== '' &&
      this.postcode.trim() !== ''
    );
  }
  

  getAddressString(): string {
    return `${this.address}, ${this.townCity}, ${this.postcode}, ${this.selectedCountry}`;
  }
  
  saveDefaultAddress(): void {
    const addressDetails = {
      firstName: this.firstName,
      lastName: this.lastName,
      mobile: this.mobile,
      selectedCountry: this.selectedCountry,
      address: this.address,
      townCity: this.townCity,
      postcode: this.postcode
    };
    localStorage.setItem('defaultAddress', JSON.stringify(addressDetails));
  }
  loadDefaultAddress(): void {
    const defaultAddressString = localStorage.getItem('defaultAddress');
    if (defaultAddressString) {
      const defaultAddress = JSON.parse(defaultAddressString);
      if (defaultAddress) {
        this.firstName = defaultAddress.firstName || '';
        this.lastName = defaultAddress.lastName || '';
        this.mobile = defaultAddress.mobile || '';
        this.selectedCountry = defaultAddress.selectedCountry || '';
        this.address = defaultAddress.address || '';
        this.townCity = defaultAddress.townCity || '';
        this.postcode = defaultAddress.postcode || '';
      }
    }
  }
  
}  

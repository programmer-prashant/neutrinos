/*DEFAULT GENERATED TEMPLATE. DO NOT CHANGE CLASS NAME*/
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Injectable } from '@angular/core'; //_splitter_
import {
  Router,
  NavigationEnd,
  NavigationStart,
  Resolve,
  ActivatedRouteSnapshot,
} from '@angular/router'; //_splitter_
import { MatSnackBar } from '@angular/material/snack-bar'; //_splitter_
import { SDBaseService } from '../../app/n-services/SDBaseService'; //_splitter_
//append_imports_end

declare const window: any;
declare const cordova: any;

@Injectable()
export class democlientservice {
  constructor(
    private sdService: SDBaseService,
    private router: Router,
    private matSnackBar: MatSnackBar
  ) {
    this.registerListeners();
  }
  registerListeners() {
    let bh = this.sdService.__constructDefault({});

    //append_listeners
  }

  //   service flows_democlientservice

  async myclientstart(myinput: any = undefined, ...others) {
    try {
      var bh = {
        input: {
          myinput: myinput,
        },
        local: {
          mylocalvar: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_PdrTtVgK0mLFudSs(bh);
      //appendnew_next_myclientstart
      return (
        // formatting output variables
        {
          input: {},
          local: {
            mylocalvar: bh.local.mylocalvar,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_PlJrHnH5NwrnsGiQ');
    }
  }

  async anotherstart(...others) {
    try {
      var bh = {
        input: {},
        local: {
          anothervar: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_dwYuLkVWzPgc0hOg(bh);
      //appendnew_next_anotherstart
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_BR67jwR2ACQDvk1L');
    }
  }

  async asyncstart(...others) {
    try {
      var bh = {
        input: {},
        local: {},
      };
      bh = this.sdService.__constructDefault(bh);
      this.sd_8m75iTQHvckHXhfZ(bh);
      //appendnew_next_asyncstart
      return (
        // formatting output variables
        {
          input: {},
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_slmQCexvjJmMZGc7');
    }
  }

  async dbstart(dbdatainput: any = undefined, ...others) {
    try {
      var bh = {
        input: {
          dbdatainput: dbdatainput,
        },
        local: {
          result: undefined,
        },
      };
      bh = this.sdService.__constructDefault(bh);
      bh = await this.sd_h63Xyqt37T8Qw6jd(bh);
      //appendnew_next_dbstart
      return (
        // formatting output variables
        {
          input: {
            dbdatainput: bh.input.dbdatainput,
          },
          local: {
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_tfdDi2Ccw5t6A4Y3');
    }
  }

  //appendnew_flow_democlientservice_start

  async sd_PdrTtVgK0mLFudSs(bh) {
    try {
      console.log('Data Received from input', bh.input.myinput);
      // console.log('Data from local Variable',bh.local.demolocal)
      bh.local.mylocalvar = {
        'FullName ': ' Changed' + bh.input.myinput.fullname,
        'Title ': ' Changed' + bh.input.myinput.title,
        'Email ': ' Changed' + bh.input.myinput.email,
      };

      //throw new Error('Catch Error Example')
      bh = await this.sd_GvBZU71GxvipbWaH(bh);
      //appendnew_next_sd_PdrTtVgK0mLFudSs
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_PdrTtVgK0mLFudSs');
    }
  }

  async sd_GvBZU71GxvipbWaH(bh) {
    try {
      let outputVariables = await this.anotherstart();

      bh = await this.sd_MMCDHJ8yxvw2GtxG(bh);
      //appendnew_next_sd_GvBZU71GxvipbWaH
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_GvBZU71GxvipbWaH');
    }
  }

  async sd_MMCDHJ8yxvw2GtxG(bh) {
    try {
      let basePath = bh.system.environment.properties.ssdURL.endsWith('/')
        ? bh.system.environment.properties.ssdURL
        : bh.system.environment.properties.ssdURL + '/';
      let url = `getjsondata/`;
      let finalUrl = basePath + url;
      let requestOptions = {
        url: finalUrl,
        method: 'get',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: undefined,
      };
      bh.local.mylocalvar = await this.sdService.nHttpRequest(requestOptions);
      bh = await this.sd_z2UHC9GKCNY2KSiF(bh);
      //appendnew_next_sd_MMCDHJ8yxvw2GtxG
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_MMCDHJ8yxvw2GtxG');
    }
  }

  async sd_z2UHC9GKCNY2KSiF(bh) {
    try {
      let promiseArray = [];
      promiseArray.push(this.anotherstart());
      promiseArray.push(this.asyncstart());

      bh.local.result = await Promise.all(promiseArray);
      this.sd_JbdzsNn4Il7VxGt8(bh);
      //appendnew_next_sd_z2UHC9GKCNY2KSiF
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_z2UHC9GKCNY2KSiF');
    }
  }

  async sd_JbdzsNn4Il7VxGt8(bh) {
    try {
      console.log(new Date().toLocaleTimeString(), bh.local.mylocalvar);
      //appendnew_next_sd_JbdzsNn4Il7VxGt8
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_JbdzsNn4Il7VxGt8');
    }
  }

  async sd_dwYuLkVWzPgc0hOg(bh) {
    try {
      bh.local.anothervar = 'Another variable data';
      bh = await this.sd_itEdDl4ndHPDKzI3(bh);
      bh = await this.sd_S7vFVLWhvsrcDljf(bh);
      //appendnew_next_sd_dwYuLkVWzPgc0hOg
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dwYuLkVWzPgc0hOg');
    }
  }

  async sd_itEdDl4ndHPDKzI3(bh) {
    try {
      const {
        paramObj: qprm,
        path: path,
      } = this.sdService.getPathAndQParamsObj('/childpage');
      await this.router.navigate(
        [this.sdService.formatPathWithParams(path, undefined)],
        {
          queryParams: Object.assign(qprm, ''),
        }
      );
      bh = await this.mysnackdetail(bh);
      //appendnew_next_sd_itEdDl4ndHPDKzI3
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_itEdDl4ndHPDKzI3');
    }
  }

  async mysnackdetail(bh) {
    try {
      this.matSnackBar.open("''Page Redirected'", 'ok', {
        duration: 3000,
        direction: 'ltr',
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
      });
      //appendnew_next_mysnackdetail
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_y2ThFZ0FhW20nAER');
    }
  }

  async sd_S7vFVLWhvsrcDljf(bh) {
    try {
      bh.local.ssdURL = bh.system.environment.properties.ssdURL;
      //appendnew_next_sd_S7vFVLWhvsrcDljf
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_S7vFVLWhvsrcDljf');
    }
  }

  async sd_qxPaXI3cQ8OHuryk(bh) {
    try {
      console.log('Exeption Occur');
      console.log(bh.error);
      //appendnew_next_sd_qxPaXI3cQ8OHuryk
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_qxPaXI3cQ8OHuryk');
    }
  }

  async sd_8m75iTQHvckHXhfZ(bh) {
    try {
      console.log(
        new Date().toLocaleTimeString(),
        "'Async start method to execute'"
      );
      //appendnew_next_sd_8m75iTQHvckHXhfZ
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_8m75iTQHvckHXhfZ');
    }
  }

  async sd_h63Xyqt37T8Qw6jd(bh) {
    try {
      let requestOptions = {
        url: 'http://localhost:8081/api/postdatatomongo',
        method: 'post',
        responseType: 'json',
        reportProgress: undefined,
        headers: {},
        params: {},
        body: bh.input.dbdatainput,
      };
      bh.local.result = await this.sdService.nHttpRequest(requestOptions);
      //appendnew_next_sd_h63Xyqt37T8Qw6jd
      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_h63Xyqt37T8Qw6jd');
    }
  }

  //appendnew_node

  async errorHandler(bh, e, src) {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;

    if (
      false ||
      (await this.mycatchnode(bh))
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      throw e;
    }
  }
  async mycatchnode(bh) {
    const catchConnectedNodes = ['sd_qxPaXI3cQ8OHuryk'];
    if (catchConnectedNodes.includes(bh.errorSource)) {
      return false;
    }
    bh = await this.sd_qxPaXI3cQ8OHuryk(bh);
    //appendnew_next_mycatchnode
    return true;
  }
  //appendnew_flow_democlientservice_Catch
}

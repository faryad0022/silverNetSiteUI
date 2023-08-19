import {
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output
} from '@angular/core';
import {UploadResponse, DataUrl, NgxImageCompressService} from 'ngx-image-compress-legacy';

@Component({selector: 'app-shared-image-uploader', templateUrl: './shared-image-uploader.component.html', styleUrls: ['./shared-image-uploader.component.scss']})
export class SharedImageUploaderComponent implements OnInit {

    @Output()createdImage = new EventEmitter<string>();
    @Output()imgResultMultiple = new EventEmitter<UploadResponse[]>();

    @Input()imgToChanged = '';
    imgResultUpload : DataUrl = '';


    constructor(private imageCompress : NgxImageCompressService) {}

    ngOnInit() {}
    addImage(value : string) {
        this.imgToChanged = '';
        this.createdImage.emit(value);

    }
    addMultipleImage(value : UploadResponse[]) {
        this.imgResultMultiple.emit(value);
    }
    compressFile() {
        this.imageCompress.uploadFile().then(({image, orientation, fileName} : UploadResponse) => {
            this.imageCompress.compressFile(image, orientation, 50, 50).then((result : DataUrl) => {
                this.addImage(result);
            });
        });
    }

    uploadFile() {
        this.imageCompress.uploadFile().then(({image, orientation, fileName} : UploadResponse) => {
            this.imgResultUpload = image;
            this.addImage(image);
        });
    }

    uploadMultipleFiles() {
        return this.imageCompress.uploadMultipleFiles().then((multipleOrientedFiles : UploadResponse[]) => {
            this.addMultipleImage(multipleOrientedFiles);
        });
    }

    uploadAndResize() {
        return this.imageCompress.uploadFile().then(({image, orientation} : UploadResponse) => {
            this.addImage(image);

            this.imageCompress.compressFile(image, orientation, 50, 50, 200, 100).then((result : DataUrl) => {
                this.addImage(result);
            });
        });
    }


}

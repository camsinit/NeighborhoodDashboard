import { Configuration } from '../core/configuration'
import { FileHelper } from '../core/helpers/file'
import {
  FromPrivateToPublicUrlOptions,
  UploadPrivateOptions,
  UploadPrivateReturn,
  UploadProvider,
  UploadPublicOptions,
  UploadPublicReturn,
} from './upload.provider'

export class UploadProviderLocal extends UploadProvider {
  private staticServerUrl: string;

  constructor() {
    super();
    this.staticServerUrl = '';
  }

  private pathPublicInternal = `./public/upload/public`
  private pathPrivateInternal = `./public/upload/private`
  private pathPublicExternal = `/upload/public`
  private pathPrivateExternal = `/upload/private`

  public async initialise(): Promise<void> {
    try {
      await FileHelper.writeFolder(this.pathPublicInternal);
      this.staticServerUrl = `${Configuration.getBaseUrl()}`;
      console.log(`Upload Local is active`);
    } catch (error) {
      console.error(`Upload Local failed to start: ${error instanceof Error ? error.message : String(error)}`);
      throw error; // Re-throw the error to indicate initialization failure
    }
  }

  async uploadPublic({
    file,
  }: UploadPublicOptions): Promise<UploadPublicReturn> {
    const content = file.buffer

    const filename = this.ensureFilename(file.name)

    const path = FileHelper.joinPaths(this.pathPublicInternal, filename)

    FileHelper.writeFile(path, content)

    const url = `${this.staticServerUrl}${this.pathPublicExternal}/${filename}`

    return { url }
  }

  async uploadPrivate({
    file,
  }: UploadPrivateOptions): Promise<UploadPrivateReturn> {
    const content = Buffer.from(file.buffer)

    const filename = this.ensureFilename(file.name)

    const path = FileHelper.joinPaths(this.pathPrivateInternal, filename)

    FileHelper.writeFile(path, content)

    const url = `${this.staticServerUrl}${this.pathPrivateExternal}/${filename}`

    return { url }
  }

  async fromPrivateToPublicUrl({
    url,
  }: FromPrivateToPublicUrlOptions): Promise<UploadPrivateReturn> {
    return { url }
  }
}

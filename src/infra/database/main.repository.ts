import { GridFSBucketWriteStream, MongoClient, WithId, Document } from "mongodb";
import { Db, GridFSBucket, ObjectId } from "mongodb";
import { join } from "path";
import { existsSync, mkdirSync, writeFileSync, createReadStream, unlinkSync, createWriteStream } from "fs";

import { get_connection } from "./mongo.database";

export enum Upload_Error {
  INVALID_ARCHIVE = " invalid archive object",
  UNABLE_TO_UPLOAD = "unable to save archive in database",
}

export enum Download_Error {
  INVALID_ID = " invalid ID",
  NO_ARCHIVE_FOUND = "unable to find archive with this ID in database",
  UNABLE_TO_RECORD = "There was an error when recording archive before download",
}

export enum Delete_Error {
  INVALID_ID = " invalid ID",
  // NO_ARCHIVE_FOUND = "unable to find archive with this ID in database",
  // UNABLE_TO_RECORD = "There was an error when recording archive before download"
}

class ApiMongoRepository {
  private url: string;
  protected mdb_client: MongoClient;
  protected mdb_name: string;
  private _db: Db;
  private _archives_path_directory: string;

  constructor() {
    this.url = process.env.DATABASE_URL as any;

    // this.mdb_client = app.locals.mongo_connection;
    this.mdb_client = get_connection();

    this.mdb_name = process.env.MDB_DB as any;

    this._archives_path_directory = join(__dirname, "..", "gridfs_archives_temp");

    if (!existsSync(this._archives_path_directory)) {
      mkdirSync(this._archives_path_directory);
    }
  }

  public async save(collection_name: string, document: object) {
    try {
      const result = await this.mdb_client.db(this.mdb_name).collection(collection_name).insertOne(document);
      return result;
    } catch (e) {
      console.error(e);
      throw new Error("Could not Save");
    }
  }

  public async get(collection_name: string, id: string) {
    try {
      const result = await this.mdb_client.db(this.mdb_name).collection(collection_name).findOne({ id });

      return result;
    } catch (error) {
      console.error(error);
      throw new Error("Could not find");
    }
  }
}

export { ApiMongoRepository };

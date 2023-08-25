import { Injectable, OnApplicationShutdown } from '@nestjs/common';
import * as cache from 'memory-cache';

@Injectable()
export class CacheService implements OnApplicationShutdown {

  onApplicationShutdown(signal?: string) {
    cache.clear();
  }

  async get(key: any): Promise<any> {
    return cache.get(key);
  }

  async set(key: any, value: any): Promise<void> {
    cache.put(key, value);
  }
}
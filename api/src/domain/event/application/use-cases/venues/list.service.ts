import { Injectable } from "@nestjs/common";
import { Venue } from "mongo/schema/venue";
import { VenuesRepository } from "../../repositories/venues-repository";

type ListUseCaseResponse = {
  venues: Venue[];
}

@Injectable()
export class ListVenuesUseCase {
  constructor(
    private venuesRepository: VenuesRepository,
  ) {}

  async execute(): Promise<ListUseCaseResponse> {
    const venues = await this.venuesRepository.list()

    return {
      venues,
    }
  }
}
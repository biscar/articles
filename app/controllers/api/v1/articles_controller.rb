module Api
  module V1
    class ArticlesController < ApiController
      def index
        json = Articles::Retriever.new(permitted_index_params(params)).retrieve_json

        render json: { status: 200, data: json }
      end

      def destroy
        destroyer = Articles::Destroyer.new(permitted_destroy_params(params))
        destroyer.destroy

        render json: { status: 200 }
      end

      def update
        updater = Articles::Updater.new(permitted_update_params(params))
        updater.update

        render json: { status: 200 }
      end

      def create
        creator = Articles::Creator.new(permitted_create_params(params))
        creator.create

        render json: { status: 200 }
      end

      private

      def permitted_update_params(params)
        params.permit(:id, :name, :text, :type_code, :story_id).to_h.with_indifferent_access
      end

      def permitted_create_params(params)
        params.permit(:id, :name, :text, :type_code, :story_id).to_h.with_indifferent_access
      end

      def permitted_index_params(params)
        params.permit(:search_field, :search, :sort_field, :sort_direction, :group_field).to_h.with_indifferent_access
      end

      def permitted_destroy_params(params)
        params.permit(:id).to_h.with_indifferent_access
      end
    end
  end
end

module Api
  module V1
    class ArticleController < ApplicationController

      def index
        json = Articles::Retriever.new(permitted_index_params(params)).retrieve_json

        render json: { status: 200, data: json }
      end

      def destroy
        Articles::Destroyer.new(params[:id]).destroy

        render json: { status: 200 }
      end

      def update
        Articles::Updater.new(params[:id], permitted_update_params(params)).update

        render json: { status: 200 }
      end

      def create
        Articles::Creator.new(permitted_update_params(params)).create

        render json: { status: 200 }
      end

      private

      def permitted_update_params(params)
        params.permit(:name, :text, :type_code, :story_id).to_h.with_indifferent_access
      end

      def permitted_index_params(params)
        params.permit(:search_field, :search, :sort_field, :sort_value).to_h.with_indifferent_access
      end

    end
  end
end
